/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0066ff',
        accent: '#ff3b3b',
        blackish: '#0a0a0a'
      },
      fontFamily: {
        inter: ['Inter','ui-sans-serif','system-ui']
      }
    }
  },
  plugins: []
}
