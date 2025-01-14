/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mouse: ['mouse memoirs', 'sans-serif'],
        Mate: ['mate', 'sans-serif'],
      },
    },
  },
  plugins: [],
}