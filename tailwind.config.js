const theme = require('tailwindcss/defaultTheme')
const formPlugin = require('@tailwindcss/forms')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
  variants: {
    extend: {},
  },
  plugins: [formPlugin],
}
