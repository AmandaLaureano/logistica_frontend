
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
     backgroundImage: {
      'blur3': "url('/app/blur3.png')",
    },
    dropShadow:{
      '2xl': '2px 2px 2px rgba(228, 229, 230, 0.50)',
      '3xl': '0px 5px 5px rgba(0, 0, 0, 1)',
    },
    screens: {
      'xsm': '285px',

      'xmd': '468px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',

      '3xl': '1636px',

      '4xl': '1800px',
    },
    colors: {
      'gray-line': "rgba(10, 10, 10, 0.25)",
      'gray-shadow': "rgba(0, 0, 0, 0.25)",
      'transparent': 'rgba(0, 0, 0, 0)',
      'black': '#000000',
      'black-light': '#0A0A0A',
      'black-gray-border': 'rgba(0, 0, 0, 0.3)',
      'gray': '#525252',
      'white': '#ffffff',
      'white-normal': '#F1F1F1',
      'white-simple': '#E4E5E6',
      'white-gray': '#E6E7E8',
      'light-gray': '#D9D9D9',
      'red': '#D52C2C',
      'green-simple': '#509d45',

      },
    } 
  },
  plugins: [],
}
