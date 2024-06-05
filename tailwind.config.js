/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./index.html",
  ],
  theme: {
    color: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#00000',
      green: {
        light: '#81A2A6',
        DEFAULT: '#037277',
        dark: '#144244',
      },
      pink: {
        light: '#E6D9D5',
        DEFAULT: '#D6BFBF',
      },
      white: '#FAFAFA',
    },
    fontFamily: {
      sans: ['montserrat', 'sans-serif'], //ExtraLight, Regular, Italic, SemiBold, Bold
      serif: ['miller-display', 'serif'],
    },
    extend: {
      fontFamily: {
        display1: ['fino-sans', 'sans-serif'],
        display2: ['amandine', 'sans-serif'],
      }
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}

