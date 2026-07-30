/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E84C1E',
          'orange-dark': '#C73E17',
          'orange-light': '#F5E8E4',
          teal: '#1E8A7E',
          navy: '#1A2340',
          gray: '#F7F8FB',
          'gray-mid': '#6B7280',
        },
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
