import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#5EAD43',
          dark: '#4A8F35',
          light: '#7BC262',
          softer: '#EAF6E4',
        },
        ink: {
          DEFAULT: '#0E0E0E',
          soft: '#1C1C1C',
        },
        mist: '#F9FAFB',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.06) translate(-1%, -1%)' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
        underline: {
          '0%': { width: '0' },
          '100%': { width: '3.5rem' },
        },
      },
      animation: {
        kenburns: 'kenburns 18s ease-in-out infinite',
        underline: 'underline 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};

export default config;
