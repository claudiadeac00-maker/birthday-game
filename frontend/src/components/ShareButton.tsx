import { useState } from 'react';
import { Button } from './ui/button';
import { Share2, Check } from 'lucide-react';

export const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const text = `I just completed Andrei's Birthday Game! 🎉 A fun quiz about Claudia & Andrei's relationship. Made with 💜 by Claudia!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Andrei's Birthday Game",
          text: text,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      size="lg"
      className="gap-2"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          Copied!
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          Share
        </>
      )}
    </Button>
  );
};
