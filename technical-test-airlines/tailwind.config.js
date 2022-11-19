/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [],
  theme: {
    extend: {},
    colors: {
      primary: '#151e3b',
      secondary: '#ff4833'
    }
  },
  plugins: [],
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
}
