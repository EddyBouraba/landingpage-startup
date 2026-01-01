// 🎨 Configuration du thème - Personnalisez vos couleurs ici

export const theme = {
  // Couleurs des chapitres
  chapters: {
    welcome: {
      gradient: 'from-slate-900 via-purple-900 to-slate-900',
      accent: 'from-cyan-400 via-purple-400 to-pink-400',
    },
    vision: {
      gradient: 'from-indigo-950 via-purple-950 to-pink-950',
      accent: 'from-cyan-400 to-purple-400',
    },
    power: {
      gradient: 'from-purple-950/30 via-black to-cyan-950/30',
      accent: 'from-purple-400 via-pink-400 to-cyan-400',
    },
    impact: {
      gradient: 'from-slate-900 via-indigo-950 to-slate-900',
      accent: 'from-indigo-400 to-cyan-400',
    },
    join: {
      gradient: 'from-violet-600 via-purple-600 to-pink-600',
      accent: 'white',
    },
  },

  // Features (cartes du Chapter 2)
  features: [
    { color: 'from-yellow-400 to-orange-500' },
    { color: 'from-green-400 to-emerald-500' },
    { color: 'from-blue-400 to-cyan-500' },
    { color: 'from-purple-400 to-pink-500' },
    { color: 'from-indigo-400 to-purple-500' },
    { color: 'from-pink-400 to-rose-500' },
  ],

  // Navigation latérale
  navigation: {
    chapters: [
      { icon: '🚀', color: 'from-blue-500 to-cyan-500' },
      { icon: '✨', color: 'from-purple-500 to-pink-500' },
      { icon: '⚡', color: 'from-yellow-500 to-orange-500' },
      { icon: '💎', color: 'from-green-500 to-emerald-500' },
      { icon: '🎯', color: 'from-indigo-500 to-purple-500' },
    ],
  },

  // Effets
  effects: {
    cursorTrail: 'from-purple-500 to-pink-500',
    particles: 'bg-purple-400',
    glow: 'rgba(139, 92, 246, 0.5)',
  },
};

export default theme;
