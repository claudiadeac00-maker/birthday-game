import { Card } from './ui/card';
import { Button } from './ui/button';
import { Heart, Sparkles, PartyPopper, RotateCcw } from 'lucide-react';
import { finalMessage } from '../data/gameData';
import Confetti from 'react-confetti';
import { useWindowSize } from '../hooks/useWindowSize';
import { ShareButton } from './ShareButton';

export const FinalMessage = () => {
  const { width, height } = useWindowSize();
  
  const handlePlayAgain = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-accent-purple-50 via-accent-destructive-50 to-accent-success-50 relative overflow-hidden">
      <Confetti
        width={width}
        height={height}
        recycle={true}
        numberOfPieces={150}
        colors={['#a855f7', '#8b5cf6', '#ec4899', '#f43f5e', '#10b981', '#f59e0b']}
        gravity={0.15}
      />
      
      <Card className="max-w-3xl w-full p-8 md:p-16 text-center space-y-8 shadow-2xl border-2 border-accent-purple-500/30 relative z-10">
        <div className="flex justify-center gap-4 text-6xl animate-bounce">
          <PartyPopper className="w-16 h-16 text-accent-purple-500" />
          <Heart className="w-16 h-16 text-accent-destructive-500 fill-accent-destructive-500" />
          <PartyPopper className="w-16 h-16 text-accent-success-500" />
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            {finalMessage.split('\n').map((line, i) => {
              if (line.includes('CONGRATULATIONS')) {
                return (
                  <h1 key={i} className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-purple-500 via-accent-violet-500 to-accent-purple-500 bg-clip-text text-transparent break-words">
                    {line}
                  </h1>
                );
              }
              if (line.includes('I LOVE YOU')) {
                return (
                  <p key={i} className="text-5xl md:text-6xl font-bold text-accent-destructive-500 animate-pulse">
                    {line}
                  </p>
                );
              }
              if (line.includes('Happy birthday')) {
                return (
                  <p key={i} className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
                    {line}
                  </p>
                );
              }
              if (line.trim()) {
                return (
                  <p key={i} className="text-lg text-muted-foreground">
                    {line}
                  </p>
                );
              }
              return <div key={i} className="h-2" />;
            })}
          </div>

          <div className="flex justify-center gap-3 pt-6">
            <Sparkles className="w-8 h-8 text-accent-success-500 animate-pulse" />
            <Sparkles className="w-8 h-8 text-accent-purple-500 animate-pulse delay-100" />
            <Sparkles className="w-8 h-8 text-accent-destructive-500 animate-pulse delay-200" />
          </div>
        </div>

        <div className="pt-8 border-t border-border space-y-4">
          <p className="text-sm text-muted-foreground italic">
            You completed all 4 sections and answered 32 questions!
          </p>
          
          <div className="flex gap-3 justify-center">
            <Button
              onClick={handlePlayAgain}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Play Again
            </Button>
            <ShareButton />
          </div>
          
          <p className="text-xs text-muted-foreground mt-2">
            Made with endless love 💜 by Claudia
          </p>
        </div>
      </Card>
    </div>
  );
};
