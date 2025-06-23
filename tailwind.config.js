/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      heading: ['var(--font-heading)', 'serif'],
      body: ['var(--font-body)', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        buyer: 'var(--buyer)',
        seller: 'var(--seller)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '3rem' }],
        'h2': ['2rem', { lineHeight: '2.5rem' }],
        'h3': ['1.75rem', { lineHeight: '2.25rem' }],
        'h4': ['1.5rem', { lineHeight: '2rem' }],
        'body': ['1rem', { lineHeight: '1.5rem' }],
      },
      boxShadow: {
        'widget': '0 2px 8px rgba(0,0,0,0.08)',
      },
      minHeight: {
        'widget': '480px',
      },
      zIndex: {
        'modal': '1000',
      },
    },
  },
  plugins: [],
}; 