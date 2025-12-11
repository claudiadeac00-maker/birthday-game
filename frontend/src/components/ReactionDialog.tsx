import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface ReactionDialogProps {
  open: boolean;
  reaction: string;
  sectionColor: 'purple' | 'violet' | 'success' | 'destructive';
  onContinue: () => void;
}

const colorClasses = {
  purple: 'from-accent-purple-500 to-accent-violet-500',
  violet: 'from-accent-violet-500 to-accent-purple-500',
  success: 'from-accent-success-500 to-accent-sap-500',
  destructive: 'from-accent-destructive-500 to-accent-orange-500'
};

const reactionEmojis = ['😏', '😂', '🥰', '😹', '🤭', '😳', '💜', '🎉'];

export const ReactionDialog = ({ open, reaction, sectionColor, onContinue }: ReactionDialogProps) => {
  const randomEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
  
  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md">
        <div className="space-y-6 text-center py-4">
          <div className="text-6xl animate-bounce">
            {randomEmoji}
          </div>
          
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Claudia's Reaction:</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {reaction}
            </p>
          </div>

          <Button
            onClick={onContinue}
            size="lg"
            className={`w-full text-lg py-6 bg-gradient-to-r ${colorClasses[sectionColor]} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            Continue <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
