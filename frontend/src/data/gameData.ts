export type QuestionType = 'choice' | 'open';

export interface ChoiceOption {
  value: string;
  reaction: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  choices?: ChoiceOption[];
  openReactions?: {
    keywords?: string[];
    reaction: string;
  }[];
  defaultReaction?: string;
}

export interface Section {
  id: string;
  emoji: string;
  title: string;
  intro: string;
  questions: Question[];
  color: 'purple' | 'violet' | 'success' | 'destructive';
}

export const sections: Section[] = [
  {
    id: 'daily-life',
    emoji: '🤪',
    title: 'Daily Life Chaos',
    color: 'purple',
    intro: 'Welcome to Level 1: Everyday Chaos™\nDiscover if you actually pay attention to Claudia\'s natural ecosystem and daily nonsense. Good luck, soldier.',
    questions: [
      {
        id: 'q1',
        type: 'choice',
        question: 'Who is more dramatic after a 10% inconvenience — Claudia or Andrei?',
        choices: [
          { value: 'Claudia', reaction: 'Yesss! Drama Queen alert 😳' },
          { value: 'Andrei', reaction: 'Andrei insists he\'s calm… but we know better 😂' }
        ]
      },
      {
        id: 'q2',
        type: 'open',
        question: 'Claudia\'s signature "m-am enervat" phrase?',
        defaultReaction: 'Interesting answer! Claudia is taking notes 📝'
      },
      {
        id: 'q3',
        type: 'choice',
        question: 'Who eats the last snack and then acts innocent — Claudia or Andrei?',
        choices: [
          { value: 'Claudia', reaction: 'Claudia strikes again… shhh don\'t tell Andrei 😬' },
          { value: 'Andrei', reaction: 'Andrei denies it, but we have evidence 😹' }
        ]
      },
      {
        id: 'q4',
        type: 'open',
        question: 'According to Andrei, what is the #1 thing Claudia argues about most often?',
        defaultReaction: 'Hmm, Claudia is raising an eyebrow at this one 🤨'
      },
      {
        id: 'q5',
        type: 'open',
        question: 'What is Claudia doing 95% of the time?',
        defaultReaction: 'That\'s... actually pretty accurate 😅'
      },
      {
        id: 'q6',
        type: 'open',
        question: 'If Claudia were an animal today, which one would Andrei choose?',
        openReactions: [
          {
            keywords: ['monkey', 'maimuta', 'maimută', 'm'],
            reaction: 'HAHA OMG yes, chaos monkey detected 😹… savage but true 😏'
          }
        ],
        defaultReaction: 'Interesting choice! Claudia is... considering it 🤔'
      },
      {
        id: 'q7',
        type: 'choice',
        question: 'Who apologises first in the Claudia-Andrei household?',
        choices: [
          { value: 'Claudia', reaction: 'Claudia sets the example… but secretly plots 😏' },
          { value: 'Andrei', reaction: 'Andrei thinks he\'s first… we see through it 😂' }
        ]
      }
    ]
  },
  {
    id: 'relationship-habits',
    emoji: '😂',
    title: 'Relationship Habits',
    color: 'violet',
    intro: 'Level 2: Habits, Rituals & Random Relationship Gremlin Behaviour™\nLet\'s see who steals the blankets and who\'s the CEO of \'întârziem dar e ok.\'',
    questions: [
      {
        id: 'q8',
        type: 'choice',
        question: 'Who steals the blankets more often — Claudia or Andrei?',
        choices: [
          { value: 'Andrei', reaction: 'Yes! Andrei… guilty as charged 😈 Claudia is scolding you for picking her 😹' },
          { value: 'Claudia', reaction: 'Claudia is innocent… for once 😏' }
        ]
      },
      {
        id: 'q9',
        type: 'choice',
        question: 'Which one takes longer to get ready, even when they swear "maxim 5 minute"?',
        choices: [
          { value: 'Claudia', reaction: 'Claudia needs at least 15 😬' },
          { value: 'Andrei', reaction: 'Andrei thought he was slow… cute try 😂' }
        ]
      },
      {
        id: 'q10',
        type: 'open',
        question: 'What does Claudia ALWAYS forget before leaving the house?',
        defaultReaction: 'Probably true! Claudia is checking her pockets now 😅'
      },
      {
        id: 'q11',
        type: 'open',
        question: 'What is the official "Claudia & Andrei are late but it\'s fine" moment?',
        defaultReaction: 'Classic! That sounds about right 😂'
      },
      {
        id: 'q12',
        type: 'choice',
        question: 'Between Claudia and Andrei, who is the "responsible adult"?',
        choices: [
          { value: 'Claudia', reaction: 'Claudia tries, but chaos wins 😅' },
          { value: 'Andrei', reaction: 'Andrei… sometimes 😏' }
        ]
      },
      {
        id: 'q13',
        type: 'open',
        question: 'What is Claudia\'s secret superpower in the relationship?',
        defaultReaction: 'Aww, that\'s sweet! Claudia approves 💜'
      },
      {
        id: 'q14',
        type: 'open',
        question: 'What does Claudia do when she wants attention from Andrei?',
        defaultReaction: 'Busted! That\'s exactly what she does 😹'
      },
      {
        id: 'q15',
        type: 'choice',
        question: 'Who starts 99% of the silly fights — Claudia or Andrei?',
        choices: [
          { value: 'Claudia', reaction: 'Claudia strikes again ⚡' },
          { value: 'Andrei', reaction: 'Andrei insists he\'s innocent… liiiike always 😹' }
        ]
      },
      {
        id: 'q16',
        type: 'open',
        question: 'What chaotic trait do Claudia and Andrei both share?',
        defaultReaction: 'So true! You two are perfectly chaotic together 😂'
      },
      {
        id: 'q17',
        type: 'open',
        question: 'What phrase do Claudia and Andrei say at least 50 times a day?',
        defaultReaction: 'LOL yes! That phrase is basically your love language 💕'
      }
    ]
  },
  {
    id: 'gentle-roasts',
    emoji: '😈',
    title: 'Gentle Roasts',
    color: 'destructive',
    intro: 'Level 3: The Roast Arena 🔥\nHonesty hurts but also unlocks puzzle pieces.\nClaudia approved all roasts in advance.',
    questions: [
      {
        id: 'q18',
        type: 'choice',
        question: 'Who has more main character energy — Claudia or Andrei?',
        choices: [
          { value: 'Claudia', reaction: 'Drama queen mode: ON 😎' },
          { value: 'Andrei', reaction: 'Andrei thought he could compete… lol 😹' }
        ]
      },
      {
        id: 'q19',
        type: 'open',
        question: 'What is Claudia absolutely incapable of doing quietly?',
        defaultReaction: 'HAHA! Claudia is offended but also laughing 😂'
      },
      {
        id: 'q20',
        type: 'choice',
        question: 'Who sleeps in a more unhinged position — Claudia or Andrei?',
        choices: [
          { value: 'Andrei', reaction: 'He\'s a wild sleeper 😏' },
          { value: 'Claudia', reaction: 'Claudia is innocent… but she\'s plotting 😹' }
        ]
      },
      {
        id: 'q21',
        type: 'choice',
        question: 'Who panics first when something is lost?',
        choices: [
          { value: 'Claudia', reaction: 'Chaos first 😹' },
          { value: 'Andrei', reaction: 'Andrei\'s panic mode: expert 😏' }
        ]
      },
      {
        id: 'q22',
        type: 'choice',
        question: 'Who becomes feral when hungry — Claudia or Andrei?',
        choices: [
          { value: 'Claudia', reaction: 'Claudia transforms… beware 🫣' },
          { value: 'Andrei', reaction: 'Andrei tries to deny it 😹' }
        ]
      },
      {
        id: 'q23',
        type: 'choice',
        question: 'Which one of us is more likely to buy something stupid at 2 AM — Claudia or Andrei?',
        choices: [
          { value: 'Claudia', reaction: 'Midnight shopping chaos activated 😏' },
          { value: 'Andrei', reaction: 'Sometimes guilty too 😹' }
        ]
      },
      {
        id: 'q24',
        type: 'open',
        question: 'What is Claudia\'s biggest delulu moment according to Andrei?',
        defaultReaction: 'Claudia says she\'s NOT delusional… which is very delulu 😂'
      },
      {
        id: 'q25',
        type: 'choice',
        question: 'Who needs snacks every 30 minutes to stay alive?',
        choices: [
          { value: 'Andrei', reaction: 'Snack king detected 😏🍫' },
          { value: 'Claudia', reaction: 'Claudia tries… but Andrei rules 😹' }
        ]
      },
      {
        id: 'q26',
        type: 'choice',
        question: 'Between Claudia and Andrei, who would survive longer in the wild?',
        choices: [
          { value: 'Andrei', reaction: 'Survival king 😎' },
          { value: 'Claudia', reaction: 'Claudia would probably feed the wildlife 😹' }
        ]
      }
    ]
  },
  {
    id: 'cute-love',
    emoji: '❤️',
    title: 'Cute & Funny Love Stuff',
    color: 'success',
    intro: 'Awww time! 💖\nLevel 4 is all about the sweet, cheesy, chaotic love between Claudia & Andrei.\nAnswer and Claudia melts. React to surprises accordingly.',
    questions: [
      {
        id: 'q27',
        type: 'open',
        question: 'What is the most Claudia-coded way of saying "I love you" to Andrei?',
        defaultReaction: 'Awww! That\'s so sweet, Claudia is melting 🥹💜'
      },
      {
        id: 'q28',
        type: 'choice',
        question: 'Who gives better hugs — Claudia or Andrei?',
        choices: [
          { value: 'Claudia', reaction: 'Hugs level: expert 😏💛' },
          { value: 'Andrei', reaction: 'Hugs level: expert 😏💛' }
        ]
      },
      {
        id: 'q29',
        type: 'open',
        question: 'What instantly makes Claudia melt when Andrei does it?',
        defaultReaction: 'That\'s so cute! Claudia is blushing now 😊💕'
      },
      {
        id: 'q30',
        type: 'open',
        question: 'What is Claudia & Andrei\'s most iconic inside joke?',
        defaultReaction: 'HAHA! Only you two understand this one 😂❤️'
      },
      {
        id: 'q31',
        type: 'open',
        question: 'What song describes Claudia & Andrei the best?',
        defaultReaction: 'Perfect choice! That song is totally you two 🎵💜'
      },
      {
        id: 'q32',
        type: 'open',
        question: 'What does Claudia do that instantly makes Andrei laugh?',
        defaultReaction: 'LOL! Andrei is laughing just thinking about it 😹💕'
      }
    ]
  }
];

export const puzzleMessages = [
  'Puzzle piece unlocked! 🧩✨ One step closer to Claudia\'s big birthday message ❤️',
  'Another piece of the puzzle is yours! 🎉🧩 Keep going, you\'re doing amazing!',
  'Puzzle progress increased! 📈💜 Claudia is impressed and smiling right now 😊',
  'Almost complete — keep going! 🚀🎯 You\'re so close to the final surprise!',
  'Look at you, smart & cute! 🥰🧩 Final puzzle piece added! Time for the big reveal! 🎊'
];

export const finalMessage = `CONGRATULATIONS ANDREI!
You survived the Chaos Couple Challenge,
proved your love,
and unlocked Claudia's final message…

I LOVE YOU ❤️

Happy birthday, my soulmate.`;
