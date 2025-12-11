import { useEffect, useState } from 'react';

interface Emoji {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
}

export const EmojiRain = ({ emojis = ['💜', '❤️', '😂', '🎉', '✨', '🧩'] }: { emojis?: string[] }) => {
  const [emojiList, setEmojiList] = useState<Emoji[]>([]);

  useEffect(() => {
    const newEmojis: Emoji[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 3
    }));
    setEmojiList(newEmojis);
  }, [emojis]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {emojiList.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute text-3xl opacity-60 animate-fall"
          style={{
            left: `${emoji.left}%`,
            animationDelay: `${emoji.delay}s`,
            animationDuration: `${emoji.duration}s`,
            top: '-50px'
          }}
        >
          {emoji.emoji}
        </div>
      ))}
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
};
