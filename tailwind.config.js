const theme = require('tailwindcss/defaultTheme')
const formPlugin = require('@tailwindcss/forms')
const animatePlugin = require('tailwindcss-animate')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ...theme.fontFamily,
        sans: ['Inter', ...theme.fontFamily.serif],
      },
      colors: {
        pink: {
          500: '#E4526E',
          600: '#E13F5E',
          700: '#CA3854',
        },
      },
    },
  },
  plugins: [formPlugin, animatePlugin],
}
