import { useState } from 'react';
import { useGameState } from '../hooks/useGameState';
import { WelcomeScreen } from './WelcomeScreen';
import { SectionIntro } from './SectionIntro';
import { QuestionCard } from './QuestionCard';
import { PuzzleCelebration } from './PuzzleCelebration';
import { FinalMessage } from './FinalMessage';
import { ProgressIndicator } from './ProgressIndicator';
import { SplashScreen } from './SplashScreen';

type GameScreen = 'splash' | 'welcome' | 'section-intro' | 'question' | 'puzzle' | 'final';

export const Game = () => {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>('splash');
  const {
    gameState,
    currentSection,
    currentQuestion,
    totalSections,
    puzzlePiecesCollected,
    startSection,
    submitAnswer,
    getReaction
  } = useGameState();

  const handleStartGame = () => {
    setCurrentScreen('section-intro');
  };

  const handleStartSection = () => {
    startSection();
    setCurrentScreen('question');
  };

  const handleSubmitAnswer = (answer: string, reaction: string) => {
    submitAnswer(answer, reaction);
    
    // Check if section is complete
    const isLastQuestionInSection = 
      gameState.currentQuestionIndex === currentSection.questions.length - 1;
    
    if (isLastQuestionInSection) {
      setCurrentScreen('puzzle');
    }
  };

  const handleContinueFromPuzzle = () => {
    if (gameState.gameComplete) {
      setCurrentScreen('final');
    } else {
      setCurrentScreen('section-intro');
    }
  };

  const showProgress = currentScreen !== 'splash' && currentScreen !== 'welcome' && currentScreen !== 'final' && !gameState.gameComplete;

  if (currentScreen === 'splash') {
    return <SplashScreen onComplete={() => setCurrentScreen('welcome')} />;
  }

  if (currentScreen === 'welcome') {
    return <WelcomeScreen onStart={handleStartGame} />;
  }

  if (currentScreen === 'section-intro' && gameState.showIntro) {
    return (
      <>
        {showProgress && (
          <ProgressIndicator
            currentSection={gameState.currentSectionIndex + 1}
            totalSections={totalSections}
            puzzlePiecesCollected={puzzlePiecesCollected}
          />
        )}
        <SectionIntro
          section={currentSection}
          sectionNumber={gameState.currentSectionIndex + 1}
          totalSections={totalSections}
          onStart={handleStartSection}
        />
      </>
    );
  }

  if (currentScreen === 'question' && currentQuestion) {
    return (
      <>
        {showProgress && (
          <ProgressIndicator
            currentSection={gameState.currentSectionIndex + 1}
            totalSections={totalSections}
            puzzlePiecesCollected={puzzlePiecesCollected}
          />
        )}
        <QuestionCard
          question={currentQuestion}
          section={currentSection}
          questionNumber={gameState.currentQuestionIndex + 1}
          totalQuestions={currentSection.questions.length}
          onSubmit={handleSubmitAnswer}
          getReaction={getReaction}
        />
      </>
    );
  }

  if (currentScreen === 'puzzle') {
    return (
      <>
        {showProgress && (
          <ProgressIndicator
            currentSection={gameState.currentSectionIndex + 1}
            totalSections={totalSections}
            puzzlePiecesCollected={puzzlePiecesCollected}
          />
        )}
        <PuzzleCelebration
          section={currentSection}
          puzzleNumber={puzzlePiecesCollected}
          totalPuzzles={totalSections}
          onContinue={handleContinueFromPuzzle}
        />
      </>
    );
  }

  if (currentScreen === 'final' || gameState.gameComplete) {
    return <FinalMessage />;
  }

  return null;
};
