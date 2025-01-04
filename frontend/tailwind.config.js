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
        secondary: 'white',
        third: '#f3fb80',
        fourth: "#22132e",
        vulcan: "#f6f6f9",
        black: {
          200: '#333333', 
          300: '#1a1a1a', 
        },
      },
      fontFamily: {
        squada: ["Squada One", "serif"], // Use Squada One font
        roboto: ['Roboto', 'serif'],
      },
      fontWeight: {
        thin: '100',
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
        xlarge: '900',
      },
    },
  },
  plugins: [],
}

