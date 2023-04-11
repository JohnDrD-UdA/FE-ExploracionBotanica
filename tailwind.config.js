/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto':['var(--font-roboto)']
      },
      colors:theme=>({
        'university-green':'#33691E'
      })
    },
  },
  plugins: [],
}
