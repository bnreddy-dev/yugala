/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#02040a',
          900: '#040714',
          800: '#070d24',
          700: '#0e183a',
          600: '#152454',
        },
        shyama: {
          deep: '#030511',
          blue: '#0a1435',
          glow: '#00d2ff',
        },
        radha: {
          gold: '#ffd166',
          champagne: '#f4a261',
          rose: '#e76f51',
          lotus: '#ff758f',
        },
        mayur: {
          cyan: '#00f0ff',
          emerald: '#00dfa2',
          teal: '#06d6a0',
        },
        washi: {
          100: '#faf8f5',
          200: '#f0eae1',
          300: '#dcd3c5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
        japanese: ['"Noto Serif JP"', 'serif'],
      },
    },
  },
  plugins: [],
}
