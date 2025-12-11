import { useState, useCallback } from 'react';
import { sections } from '../data/gameData';

export interface Answer {
  questionId: string;
  answer: string;
  reaction: string;
}

export interface GameState {
  currentSectionIndex: number;
  currentQuestionIndex: number;
  answers: Answer[];
  completedSections: string[];
  showIntro: boolean;
  gameComplete: boolean;
}

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentSectionIndex: 0,
    currentQuestionIndex: 0,
    answers: [],
    completedSections: [],
    showIntro: true,
    gameComplete: false
  });

  const currentSection = sections[gameState.currentSectionIndex];
  const currentQuestion = currentSection?.questions[gameState.currentQuestionIndex];
  const totalSections = sections.length;
  const puzzlePiecesCollected = gameState.completedSections.length;

  const startSection = useCallback(() => {
    setGameState(prev => ({ ...prev, showIntro: false }));
  }, []);

  const submitAnswer = useCallback((answer: string, reaction: string) => {
    setGameState(prev => {
      const newAnswers = [
        ...prev.answers,
        {
          questionId: currentQuestion.id,
          answer,
          reaction
        }
      ];

      const isLastQuestionInSection = 
        prev.currentQuestionIndex === currentSection.questions.length - 1;
      
      if (isLastQuestionInSection) {
        const newCompletedSections = [...prev.completedSections, currentSection.id];
        const isLastSection = prev.currentSectionIndex === sections.length - 1;

        if (isLastSection) {
          return {
            ...prev,
            answers: newAnswers,
            completedSections: newCompletedSections,
            gameComplete: true
          };
        }

        return {
          ...prev,
          answers: newAnswers,
          completedSections: newCompletedSections,
          currentSectionIndex: prev.currentSectionIndex + 1,
          currentQuestionIndex: 0,
          showIntro: true
        };
      }

      return {
        ...prev,
        answers: newAnswers,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      };
    });
  }, [currentQuestion, currentSection]);

  const getReaction = useCallback((answer: string): string => {
    if (currentQuestion.type === 'choice') {
      const choice = currentQuestion.choices?.find(c => c.value === answer);
      return choice?.reaction || 'Interesting choice!';
    }

    const lowerAnswer = answer.toLowerCase().trim();
    
    // Easter eggs - special reactions for love messages
    if (lowerAnswer.includes('i love you') || lowerAnswer.includes('te iubesc') || lowerAnswer.includes('te ador')) {
      return 'Awww! 🥰 Claudia is melting right now! That\'s the sweetest answer ever 💜💜💜';
    }
    
    if (lowerAnswer.includes('claudia is perfect') || lowerAnswer.includes('claudia e perfecta')) {
      return 'CORRECT! 😎 You\'ve unlocked the secret truth! Claudia IS perfect 👑✨';
    }

    // For open questions, check for keyword matches
    if (currentQuestion.openReactions) {
      for (const reactionRule of currentQuestion.openReactions) {
        if (reactionRule.keywords) {
          const hasMatch = reactionRule.keywords.some(keyword => 
            lowerAnswer.includes(keyword.toLowerCase())
          );
          if (hasMatch) {
            return reactionRule.reaction;
          }
        }
      }
    }

    return currentQuestion.defaultReaction || 'Interesting answer!';
  }, [currentQuestion]);

  return {
    gameState,
    currentSection,
    currentQuestion,
    totalSections,
    puzzlePiecesCollected,
    startSection,
    submitAnswer,
    getReaction
  };
};
