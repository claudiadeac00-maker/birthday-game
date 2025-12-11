import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Question, Section } from '../data/gameData';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { ReactionDialog } from './ReactionDialog';
import { ClaudiaWatching } from './ClaudiaWatching';

interface QuestionCardProps {
  question: Question;
  section: Section;
  questionNumber: number;
  totalQuestions: number;
  onSubmit: (answer: string, reaction: string) => void;
  getReaction: (answer: string) => string;
}

const colorClasses = {
  purple: 'border-accent-purple-500/30 bg-gradient-to-br from-accent-purple-50/50 to-accent-violet-50/50',
  violet: 'border-accent-violet-500/30 bg-gradient-to-br from-accent-violet-50/50 to-accent-purple-50/50',
  success: 'border-accent-success-500/30 bg-gradient-to-br from-accent-success-50/50 to-accent-sap-50/50',
  destructive: 'border-accent-destructive-500/30 bg-gradient-to-br from-accent-destructive-50/50 to-accent-orange-50/50'
};

const buttonColorClasses = {
  purple: 'bg-accent-purple-500 hover:bg-accent-purple-600 border-accent-purple-600',
  violet: 'bg-accent-violet-500 hover:bg-accent-violet-600 border-accent-violet-600',
  success: 'bg-accent-success-500 hover:bg-accent-success-600 border-accent-success-600',
  destructive: 'bg-accent-destructive-500 hover:bg-accent-destructive-600 border-accent-destructive-600'
};

export const QuestionCard = ({ 
  question, 
  section, 
  questionNumber, 
  totalQuestions, 
  onSubmit,
  getReaction 
}: QuestionCardProps) => {
  const [selectedChoice, setSelectedChoice] = useState<string>('');
  const [openAnswer, setOpenAnswer] = useState<string>('');
  const [showReaction, setShowReaction] = useState(false);
  const [currentReaction, setCurrentReaction] = useState('');

  const handleSubmit = () => {
    const answer = question.type === 'choice' ? selectedChoice : openAnswer;
    if (!answer.trim()) return;

    const reaction = getReaction(answer);
    setCurrentReaction(reaction);
    setShowReaction(true);
  };

  const handleContinue = () => {
    const answer = question.type === 'choice' ? selectedChoice : openAnswer;
    onSubmit(answer, currentReaction);
    setShowReaction(false);
    setSelectedChoice('');
    setOpenAnswer('');
  };

  const canSubmit = question.type === 'choice' 
    ? selectedChoice !== '' 
    : openAnswer.trim() !== '';

  return (
    <>
      <ClaudiaWatching />
      <div className={`min-h-screen flex items-center justify-center p-4 bg-gradient-to-br ${colorClasses[section.color]}`}>
        <Card className={`max-w-2xl w-full p-8 md:p-12 space-y-6 shadow-xl border-2 ${colorClasses[section.color]} animate-in fade-in slide-in-from-bottom duration-500`}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-sm">
                Question {questionNumber} of {totalQuestions}
              </Badge>
              <div className="text-3xl">{section.emoji}</div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              {question.question}
            </h3>

            <div className="pt-4 space-y-4">
              {question.type === 'choice' && question.choices && (
                <div className="space-y-3">
                  {question.choices.map((choice) => (
                    <button
                      key={choice.value}
                      onClick={() => setSelectedChoice(choice.value)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-md ${
                        selectedChoice === choice.value
                          ? `${buttonColorClasses[section.color]} text-white border-transparent shadow-lg animate-in zoom-in duration-200`
                          : 'bg-card border-border hover:border-accent-purple-500/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{choice.value}</span>
                        {selectedChoice === choice.value && (
                          <CheckCircle2 className="w-5 h-5" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {question.type === 'open' && (
                <div className="space-y-3">
                  <Input
                    value={openAnswer}
                    onChange={(e) => setOpenAnswer(e.target.value)}
                    placeholder="Type your answer here..."
                    className="text-lg p-6 border-2"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && canSubmit) {
                        handleSubmit();
                      }
                    }}
                  />
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <kbd className="px-2 py-1 text-xs bg-muted rounded border">Enter</kbd>
                    <span>or click Submit when ready</span>
                  </p>
                </div>
              )}

              <Button
                onClick={handleSubmit}
                disabled={!canSubmit}
                size="lg"
                className={`w-full text-lg py-6 ${buttonColorClasses[section.color]} text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]`}
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Submit Answer
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <ReactionDialog
        open={showReaction}
        reaction={currentReaction}
        sectionColor={section.color}
        onContinue={handleContinue}
      />
    </>
  );
};
