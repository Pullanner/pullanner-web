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
        valid: '#75D054',
        invalid: '#FF5E62',
        'gray-1': '#CFCFCF',
        'gray-2': '#8D8D8D',
        'gray-3': '#505050',
        'gray-4': '#373737',
        'gray-5': '#202020',
        'gray-6': '#161616',
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
