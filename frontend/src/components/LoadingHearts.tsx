import { Heart } from 'lucide-react';

export const LoadingHearts = () => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <Heart className="w-6 h-6 text-accent-purple-500 fill-accent-purple-500 animate-pulse" />
      <Heart className="w-6 h-6 text-accent-destructive-500 fill-accent-destructive-500 animate-pulse delay-100" style={{ animationDelay: '0.1s' }} />
      <Heart className="w-6 h-6 text-accent-success-500 fill-accent-success-500 animate-pulse delay-200" style={{ animationDelay: '0.2s' }} />
    </div>
  );
};
