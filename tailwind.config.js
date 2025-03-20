/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ffd700',
          200: '#ddb900',
          300: '#917800',
        },
        accent: {
          100: '#c49216',
          200: '#5e3b00',
        },
        text: {
          100: '#dcdcdc',
          200: '#929292',
        },
        background: {
          100: '#1e1e1e',
          200: '#2d2d2d',
          300: '#454545',
        },
      },
    },
  },
  plugins: [],
};
