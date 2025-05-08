/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#e30613', // Your logo's red
        'brand-black': '#000000', // Your logo's black
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enables dark mode via class
};