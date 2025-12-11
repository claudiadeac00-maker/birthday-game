import { Puzzle } from 'lucide-react';

interface ProgressIndicatorProps {
  currentSection: number;
  totalSections: number;
  puzzlePiecesCollected: number;
}

export const ProgressIndicator = ({ 
  currentSection, 
  totalSections, 
  puzzlePiecesCollected 
}: ProgressIndicatorProps) => {
  return (
    <div className="fixed top-4 right-4 z-50 bg-card/80 backdrop-blur-sm border-2 border-accent-purple-500/30 rounded-lg p-3 shadow-lg">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">
          Section {currentSection}/{totalSections}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalSections }).map((_, i) => (
            <Puzzle
              key={i}
              className={`w-4 h-4 ${
                i < puzzlePiecesCollected
                  ? 'text-accent-purple-500 fill-accent-purple-500'
                  : 'text-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
