module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',
        secondary: '#3A8DDE',
        accent: '#16B286',
        background: '#F7F9FC',
        buyer: '#3A8DDE',
        seller: '#16B286',
      },
      boxShadow: {
        widget: '0 2px 8px rgba(0,0,0,0.08)',
      },
      minHeight: {
        widget: '480px',
      },
      zIndex: {
        modal: '1000',
      },
      fontSize: {
        '5xl': '3rem', // 48px
      },
    },
  },
  plugins: [],
}; 