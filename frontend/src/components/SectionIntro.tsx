import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Section } from '../data/gameData';
import { ArrowRight } from 'lucide-react';

interface SectionIntroProps {
  section: Section;
  sectionNumber: number;
  totalSections: number;
  onStart: () => void;
}

const colorClasses = {
  purple: 'from-accent-purple-50 via-accent-purple-100 to-accent-purple-50 border-accent-purple-500',
  violet: 'from-accent-violet-50 via-accent-violet-100 to-accent-violet-50 border-accent-violet-500',
  success: 'from-accent-success-50 via-accent-success-100 to-accent-success-50 border-accent-success-500',
  destructive: 'from-accent-destructive-50 via-accent-destructive-100 to-accent-destructive-50 border-accent-destructive-500'
};

const buttonClasses = {
  purple: 'bg-gradient-to-r from-accent-purple-500 to-accent-violet-500 hover:from-accent-purple-600 hover:to-accent-violet-600',
  violet: 'bg-gradient-to-r from-accent-violet-500 to-accent-purple-500 hover:from-accent-violet-600 hover:to-accent-purple-600',
  success: 'bg-gradient-to-r from-accent-success-500 to-accent-sap-500 hover:from-accent-success-600 hover:to-accent-sap-600',
  destructive: 'bg-gradient-to-r from-accent-destructive-500 to-accent-orange-500 hover:from-accent-destructive-600 hover:to-accent-orange-600'
};

export const SectionIntro = ({ section, sectionNumber, totalSections, onStart }: SectionIntroProps) => {
  return (
    <div className={`min-h-screen flex items-center justify-center p-4 bg-gradient-to-br ${colorClasses[section.color]}`}>
      <Card className={`max-w-2xl w-full p-8 md:p-12 space-y-6 shadow-2xl border-2 ${colorClasses[section.color]} animate-in fade-in zoom-in duration-500`}>
        <div className="text-center space-y-4">
          <Badge variant="outline" className="text-sm px-4 py-1 animate-in slide-in-from-top duration-300">
            Section {sectionNumber} of {totalSections}
          </Badge>
          
          <div className="text-6xl mb-4 animate-bounce delay-150">
            {section.emoji}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            {section.title}
          </h2>
          
          <div className="bg-card/50 backdrop-blur p-6 rounded-lg">
            <p className="text-lg whitespace-pre-line text-muted-foreground">
              {section.intro}
            </p>
          </div>
          
          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              {section.questions.length} questions ahead
            </p>
            
            <Button 
              onClick={onStart}
              size="lg"
              className={`text-lg px-8 py-6 ${buttonClasses[section.color]} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              Let's Go! <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
