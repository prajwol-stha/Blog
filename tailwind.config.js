/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          'open-sans': ['Open Sans', 'sans-serif'],
          'dancing-script': ['Dancing Script', 'cursive'], 
        },

      },
    },
  plugins: [],
}