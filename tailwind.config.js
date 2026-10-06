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
        // Corporate design-skill semantic tokens (src/app/v2), mapped onto
        // the existing Tech-Career brand colors rather than the skill's defaults.
        corp: {
          primary: '#E84C1E',
          'primary-dark': '#C73E17',
          secondary: '#1A2340',
          success: '#16A34A',
          warning: '#D97706',
          danger: '#DC2626',
          surface: '#FFFFFF',
          text: '#111827',
        },
        // Warm-collage palette (src/app/exposure) — cream/soft-gray skin with an
        // electric-blue action color, deliberately distinct from the brand/corp
        // navy-orange system. Token names kept stable across the page's redesigns
        // so components don't need to be rewritten each time the values shift.
        warm: {
          bg: '#FAF8F3',
          card: '#FFFFFF',
          ink: '#1A1A1E',
          'ink-soft': '#4B4B52',
          muted: '#8A8A93',
          plum: '#171A21',
          'plum-light': '#2E3440',
          cream: '#F5F4F1',
          'cream-muted': '#A8A8B0',
        },
        // Strong action color for the exposure page (buttons, links, accents).
        action: {
          blue: '#0066FF',
          'blue-dark': '#0050C7',
        },
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
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
