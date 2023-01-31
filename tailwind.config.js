/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: '#FFD700',
          secondary: '#022C43',
          black: '#181818',
          lightBlack: '#202020',
          white: '#ffffff',
          offWhite: '#F8F9FA',
          gray: '#AAAAAA',
          lightGray: '#D2D2D2',
          red: '#DC143C',
          warning: '#d2700f',
          blueGray: '#96C2DB',
          inputBg: '#115173',
        },
      },
    },
  },
  plugins: [],
};
