/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        naver: '#00BF18',
        kakao: '#FBE950',
        primary: '#60EBD1',
        sectionBackground: '#1E1E1E',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        annie: ['Annie Use Your Telescope, cursive'],
      },
      fontSize: {
        main: '0.938rem',
      },
    },
  },
  plugins: [],
};
