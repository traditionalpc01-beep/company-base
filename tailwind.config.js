/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "[data-theme=\"dark\"]"],
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
        /* 品牌色 */
        'brand': {
          primary: 'rgb(var(--brand-primary) / <alpha-value>)',
          primaryDark: 'rgb(var(--brand-primary-dark) / <alpha-value>)',
          primaryLight: 'rgb(var(--brand-primary-light) / <alpha-value>)',
          accent: 'rgb(var(--brand-accent) / <alpha-value>)',
          accentDark: 'rgb(var(--brand-accent-dark) / <alpha-value>)',
          wildlife: 'rgb(var(--brand-wildlife) / <alpha-value>)',
          plant: 'rgb(var(--brand-plant) / <alpha-value>)',
          surface: 'rgb(var(--brand-surface) / <alpha-value>)',
          surface2: 'rgb(var(--brand-surface2) / <alpha-value>)',
        },
        
        /* 核心文本色 */
        'ink': {
          DEFAULT: 'rgb(var(--c-ink) / <alpha-value>)',
          secondary: 'rgb(var(--c-ink-secondary) / <alpha-value>)',
        },
        
        /* 辅助文本色 */
        'muted': {
          DEFAULT: 'rgb(var(--c-muted) / <alpha-value>)',
          light: 'rgb(var(--c-muted-light) / <alpha-value>)',
        },
        
        /* 背景色 */
        'surface': {
          DEFAULT: 'rgb(var(--c-surface) / <alpha-value>)',
          2: 'rgb(var(--c-surface-2) / <alpha-value>)',
          3: 'rgb(var(--c-surface-3) / <alpha-value>)',
          elevated: 'rgb(var(--c-surface-elevated) / <alpha-value>)',
        },
        
        /* 边框色 */
        'border': {
          DEFAULT: 'rgb(var(--c-border) / <alpha-value>)',
          strong: 'rgb(var(--c-border-strong) / <alpha-value>)',
        },
        
        /* 分割线 */
        'divider': 'rgb(var(--c-divider) / <alpha-value>)',
        
        /* 占位符 */
        'placeholder': 'rgb(var(--c-placeholder) / <alpha-value>)',
        
        /* 状态色 */
        'success': 'rgb(var(--c-success) / <alpha-value>)',
        'warning': 'rgb(var(--c-warning) / <alpha-value>)',
        'error': 'rgb(var(--c-error) / <alpha-value>)',
        'info': 'rgb(var(--c-info) / <alpha-value>)',
        
        /* 暖色调 */
        'warm': 'rgb(var(--c-warm) / <alpha-value>)',
        
        /* 野生动物保护色系 */
        'wildlife': {
          DEFAULT: 'rgb(var(--c-wildlife) / <alpha-value>)',
          deep: 'rgb(var(--c-wildlife-deep) / <alpha-value>)',
          light: 'rgb(var(--c-wildlife-light) / <alpha-value>)',
        },
        'conservation': 'rgb(var(--c-conservation) / <alpha-value>)',
        
        /* 植物保护色系 */
        'plant': {
          DEFAULT: 'rgb(var(--c-plant) / <alpha-value>)',
          deep: 'rgb(var(--c-plant-deep) / <alpha-value>)',
          light: 'rgb(var(--c-plant-light) / <alpha-value>)',
        },
        'soil': 'rgb(var(--c-soil) / <alpha-value>)',
        
        /* 科技色系 */
        'tech': {
          DEFAULT: 'rgb(var(--c-tech) / <alpha-value>)',
          deep: 'rgb(var(--c-tech-deep) / <alpha-value>)',
          light: 'rgb(var(--c-tech-light) / <alpha-value>)',
        },
        
        /* 生态绿色系 */
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
          dark: 'rgb(var(--c-bg) / <alpha-value>)',
          darker: 'rgb(var(--c-surface) / <alpha-value>)',
          surface: 'rgb(var(--c-surface-2) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'Source Han Sans', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Noto Serif SC', 'Lora', 'Noto Sans SC', 'ui-serif', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(var(--brand-primary), 0.28)',
        'glow-sm': '0 0 10px rgba(var(--brand-primary), 0.18)',
        'glow-accent': '0 0 20px rgba(var(--brand-accent), 0.26)',
        'glow-wildlife': '0 0 20px rgba(var(--c-wildlife), 0.3)',
        'glow-plant': '0 0 20px rgba(var(--c-plant), 0.3)',
        '1': 'var(--shadow-1)',
        '2': 'var(--shadow-2)',
        '3': 'var(--shadow-3)',
        '4': 'var(--shadow-4)',
        'soft': 'var(--shadow-soft)',
      },
      borderRadius: {
        'card': 'var(--radius-card)',
        'control': 'var(--radius-control)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'base': 'var(--transition-base)',
        'slow': 'var(--transition-slow)',
        'theme': 'var(--transition-theme)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'theme-fade': 'themeFade 300ms ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        themeFade: {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
