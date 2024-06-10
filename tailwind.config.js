/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./index.html",
  ],
  theme: {
    screens: {
      'xs': '520px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#00000',
      white: '#FAFAFA',
      beige: {
        light: '#FFE8CB',
        dark: '#CC8A5B'
      },
      blue: {
        light: '#8CB9FF',
        DEFAULT: '#6B5BCC',
        dark: '#827E99'
      },
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

