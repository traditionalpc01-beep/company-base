/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'brand': {
          primary: 'rgb(var(--brand-primary) / <alpha-value>)',
          primaryDark: 'rgb(var(--brand-primary-dark) / <alpha-value>)',
          accent: 'rgb(var(--brand-accent) / <alpha-value>)',
          accentDark: 'rgb(var(--brand-accent-dark) / <alpha-value>)',
          surface: 'rgb(var(--brand-surface) / <alpha-value>)',
          surface2: 'rgb(var(--brand-surface2) / <alpha-value>)',
        },
        'ink': 'rgb(var(--c-ink) / <alpha-value>)',
        'muted': 'rgb(var(--c-muted) / <alpha-value>)',
        'warm': 'rgb(var(--c-warm) / <alpha-value>)',
        'surface': 'rgb(var(--c-surface) / <alpha-value>)',
        'surface2': 'rgb(var(--c-surface-2) / <alpha-value>)',
        'eco-green': 'rgb(var(--brand-primary) / <alpha-value>)',
        'eco-dark': 'rgb(var(--brand-primary-dark) / <alpha-value>)',
        'tech-blue': 'rgb(var(--brand-accent-dark) / <alpha-value>)',
        'tech-cyan': 'rgb(var(--brand-accent) / <alpha-value>)',
        'forest': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        'nature': {
          green: '#10B981',
          teal: '#14B8A6',
          emerald: '#34D399',
        },
        'cyber': {
          dark: '#050810',
          darker: '#030508',
          surface: '#0a0f1a',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Source Han Sans', 'system-ui', 'sans-serif'],
        display: ['Lora', 'Poppins', 'Source Han Sans', 'ui-serif', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(45, 134, 89, 0.3)',
        'glow-sm': '0 0 10px rgba(45, 134, 89, 0.2)',
        'glow-accent': '0 0 20px rgba(34, 211, 238, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
