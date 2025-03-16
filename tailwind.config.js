/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFD700',
          200: '#ddb900',
          300: '#917800',
        },
        accent: {
          light: {
            100: '#C0C0C0',
            200: '#626262',
          },
          dark: {
            100: '#c49216',
            200: '#5e3b00',
          },
        },
        text: {
          light: {
            100: '#333333',
            200: '#5c5c5c',
          },
          dark: {
            100: '#dcdcdc',
            200: '#929292',
          },
        },
        background: {
          light: {
            100: '#F7F7F7',
            200: '#ededed',
            300: '#c4c4c4',
          },
          dark: {
            100: '#1E1E1E',
            200: '#2d2d2d',
            300: '#454545',
          },
        },
      },
    },
  },
  plugins: [],
};
