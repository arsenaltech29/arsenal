/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'arsenal-dark': '#0a0a0a',
        'arsenal-charcoal': '#111111',
        'arsenal-gray': '#1a1a1a',
        'arsenal-silver': '#8a8a8a',
        'arsenal-light': '#d4d4d4',
        'arsenal-white': '#f0f0f0',
        'arsenal-blue': '#0a1628',
        'arsenal-blue-mid': '#0d2244',
        'arsenal-accent': '#1e6fff',
        'arsenal-gold': '#c9a84c',
        'arsenal-gold-light': '#e8c97a',
      },
      fontFamily: {
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '10xl': '10rem',
        '12xl': '13rem',
        '14xl': '16rem',
      },
      letterSpacing: {
        ultrawide: '0.25em',
        massive: '0.4em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient': 'gradientShift 8s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundSize: {
        '400': '400% 400%',
      },
    },
  },
  plugins: [],
};
