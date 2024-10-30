/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2e13',
        secondary: '#f4fc96',
        third: '#f3fb80',
        fourth: "#22132e"
      },
    },
  },
  plugins: [],
}

