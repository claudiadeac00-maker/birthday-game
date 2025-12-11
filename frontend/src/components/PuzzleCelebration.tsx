import { Button } from './ui/button';
import { Card } from './ui/card';
import { Puzzle, Sparkles } from 'lucide-react';
import { puzzleMessages } from '../data/gameData';
import { Section } from '../data/gameData';

interface PuzzleCelebrationProps {
  section: Section;
  puzzleNumber: number;
  totalPuzzles: number;
  onContinue: () => void;
}

const colorClasses = {
  purple: 'from-accent-purple-50 via-accent-purple-100 to-accent-purple-50 border-accent-purple-500',
  violet: 'from-accent-violet-50 via-accent-violet-100 to-accent-violet-50 border-accent-violet-500',
  success: 'from-accent-success-50 via-accent-success-100 to-accent-success-50 border-accent-success-500',
  destructive: 'from-accent-destructive-50 via-accent-destructive-100 to-accent-destructive-50 border-accent-destructive-500'
};

export const PuzzleCelebration = ({ section, puzzleNumber, totalPuzzles, onContinue }: PuzzleCelebrationProps) => {
  const message = puzzleMessages[Math.min(puzzleNumber - 1, puzzleMessages.length - 1)];

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 bg-gradient-to-br ${colorClasses[section.color]}`}>
      <Card className={`max-w-2xl w-full p-8 md:p-12 text-center space-y-6 shadow-2xl border-2 ${colorClasses[section.color]}`}>
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <Puzzle className="w-24 h-24 text-accent-purple-500 animate-bounce" />
              <Sparkles className="w-8 h-8 text-accent-success-500 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-purple-600 via-accent-violet-600 to-accent-purple-600 bg-clip-text text-transparent">
              Section Complete! 🎉
            </h2>
            
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {message}
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur p-6 rounded-lg">
            <div className="flex items-center justify-center gap-2 text-lg">
              <span className="font-semibold">Progress:</span>
              <span className="text-accent-purple-500 font-bold">
                {puzzleNumber} / {totalPuzzles}
              </span>
              <span>puzzle pieces collected</span>
            </div>
            
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: totalPuzzles }).map((_, i) => (
                <Puzzle
                  key={i}
                  className={`w-8 h-8 transition-all duration-300 ${
                    i < puzzleNumber
                      ? 'text-accent-purple-500 fill-accent-purple-500 animate-in zoom-in'
                      : 'text-muted-foreground/30'
                  }`}
                  style={i < puzzleNumber ? { animationDelay: `${i * 100}ms` } : undefined}
                />
              ))}
            </div>
          </div>

          <Button
            onClick={onContinue}
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-accent-purple-500 to-accent-violet-500 hover:from-accent-purple-600 hover:to-accent-violet-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {puzzleNumber < totalPuzzles ? 'Next Section!' : 'See Final Message!'}
          </Button>
        </div>
      </Card>
    </div>
  );
};
