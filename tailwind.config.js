/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        grey: {
          100: '#f7f7f7',
          200: '#efefef',
          300: '#dbdbdb',
          400: '#9b9b9b',
          500: '#666666',
          600: '#333333',
        },
        'pop-orange': '#e15a1d',
        text: {
          primary: 'var(--color-grey-600)',
          secondary: 'var(--color-grey-500)',
          tertiary: 'var(--color-grey-400)',
          inverted: 'var(--color-white)',
          brand: 'var(--color-pop-orange)',
        },
        surface: {
          primary: 'var(--color-grey-100)',
          secondary: 'var(--color-grey-300)',
          tertiary: 'var(--color-grey-400)',
          brand: 'var(--color-pop-orange)',
        },
        link: {
          text: 'var(--color-text-brand)',
        },
      },
      keyframes: {
        bump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        }
      },
      animation: {
        bump: 'bump 0.3s ease-in-out'
      }
    },
  },
  plugins: [],
}