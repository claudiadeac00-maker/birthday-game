import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export const ClaudiaWatching = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show more frequently - 75% chance instead of 50%
    const shouldShow = Math.random() > 0.25;
    if (shouldShow) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000 + Math.random() * 2000); // Appear sooner (1-3 seconds instead of 2-5)
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-accent-purple-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg animate-in slide-in-from-left duration-500 flex items-center gap-2">
      <Eye className="w-4 h-4 animate-pulse" />
      <span className="text-sm font-medium">Claudia is watching... 👀</span>
    </div>
  );
};
