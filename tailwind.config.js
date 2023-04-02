/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {},
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      'light-grey': '#D5E1EF',
      'grey': '#7D889E',
      'dark-navy': '#1F314F'
    }
  },
  plugins: [],
}

