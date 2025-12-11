import { Button } from './ui/button';
import { Card } from './ui/card';
import { Sparkles, Heart, Puzzle } from 'lucide-react';
import { EmojiRain } from './EmojiRain';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-accent-purple-50 via-accent-violet-50 to-accent-success-50 relative">
      <EmojiRain />
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center space-y-6 shadow-2xl border-2 border-accent-purple-500/20 relative z-10">
        <div className="flex justify-center gap-3 text-5xl mb-4 animate-bounce">
          <Sparkles className="w-12 h-12 text-accent-purple-500" />
          <Heart className="w-12 h-12 text-accent-destructive-500" />
          <Sparkles className="w-12 h-12 text-accent-success-500" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-purple-500 via-accent-violet-500 to-accent-purple-500 bg-clip-text text-transparent">
          Happy Birthday Andrei! 🎉
        </h1>
        
        <div className="space-y-4 text-lg text-muted-foreground">
          <p className="text-xl font-semibold text-foreground">
            Welcome to the <span className="text-accent-purple-500">Chaos Couple Challenge</span>!
          </p>
          
          <p>
            Think you know Claudia? Think you know your relationship?
            Let's put that to the test! 😏
          </p>
          
          <div className="bg-accent-purple-50 dark:bg-accent-purple-900/20 p-6 rounded-lg space-y-3 text-left">
            <h3 className="font-semibold text-accent-purple-900 dark:text-accent-purple-50 flex items-center gap-2">
              <Puzzle className="w-5 h-5" />
              How it works:
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✨ Answer questions about Claudia, your relationship, and daily chaos</li>
              <li>💜 Get playful reactions to your answers (no right or wrong!)</li>
              <li>🧩 Collect puzzle pieces after each section</li>
              <li>❤️ Unlock Claudia's special birthday message at the end</li>
            </ul>
          </div>
          
          <p className="text-sm italic">
            4 sections • Multiple questions • Lots of teasing • 100% love
          </p>
        </div>
        
        <Button 
          onClick={onStart}
          size="lg"
          className="text-lg px-8 py-6 bg-gradient-to-r from-accent-purple-500 to-accent-violet-500 hover:from-accent-purple-600 hover:to-accent-violet-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Start the Challenge! 🚀
        </Button>
        
        <p className="text-xs text-muted-foreground">
          Made with 💜 by Claudia
        </p>
      </Card>
    </div>
  );
};
