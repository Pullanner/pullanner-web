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
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        main: '0.938rem',
      },
      spacing: {
        mobileHeight: '52.75rem',
      },
    },
  },
  plugins: [],
};
