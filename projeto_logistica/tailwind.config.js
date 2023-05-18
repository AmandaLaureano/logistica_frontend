const defaultTheme=require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    dropShadow:{
      '2xl': '0px 3px 3px rgba(228, 229, 230, 0.50)',
      '3xl': '0px 5px 5px rgba(0, 0, 0, 1)',
    },
    screens: {
      'xsm': '385px',

      'xmd': '468px',

      'sm': '640px',

      'md': '768px',

      '3xl': '1636px',
      ...defaultTheme.screens
    },
    colors: {
      'transparent': 'rgba(0, 0, 0, 0)',
      'black': '#000000',
      'black-light': '#0A0A0A',
      'gray': '#525252',
      'white': '#ffffff',
      'white-normal': '#F1F1F1',
      'white-simple': 'E4E5E6',
      'white-gray': 'E6E7E8',
      'light-gray': 'D9D9D9',
      'red': '#D52C2C',
      'green': '#509d45',
      },
  },
  plugins: [],
}
