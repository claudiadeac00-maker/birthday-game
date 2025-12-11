import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-accent-purple-500 via-accent-violet-500 to-accent-purple-500 flex items-center justify-center animate-out fade-out duration-300">
      <div className="text-center space-y-6 animate-in zoom-in duration-500">
        <div className="flex gap-3 justify-center">
          <Heart className="w-16 h-16 text-white fill-white animate-pulse" />
          <Heart className="w-16 h-16 text-white fill-white animate-pulse" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-16 h-16 text-white fill-white animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
        <h1 className="text-4xl font-bold text-white">
          Loading...
        </h1>
        <p className="text-white/80 text-lg">
          Preparing something special 💜
        </p>
      </div>
    </div>
  );
};
