const theme = require('tailwindcss/defaultTheme')
const formPlugin = require('@tailwindcss/forms')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ...theme.fontFamily,
        sans: ['Inter', ...theme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [formPlugin],
}
