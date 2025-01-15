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
        third: '#e3f9cd',
      },
      fontFamily: {
        times: ['"Times New Roman"', "serif"],
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

