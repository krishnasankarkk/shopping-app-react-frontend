/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins-Regular', 'sans-serif'],
      poppins_italic: ['Poppins-Italic', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

