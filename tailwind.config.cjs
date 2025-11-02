module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0066ff',
        accent: '#ff3b3b',
        redbrand: '#d32f2f',
        blackish: '#0a0a0a'
      },
      fontFamily: {
        inter: ['Inter','ui-sans-serif','system-ui']
      }
    }
  },
  plugins: []
}
