module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shortlyCyan: 'hsl(180, 66%, 49%)',
        shortlyDarkViolet: 'hsl(257, 27%, 26%)',
        shortlyGray: 'hsl(0, 0%, 75%)',
        shortlyGrayishViolet: 'hsl(257, 7%, 63%)',
        shortlyVeryDarkBlue: 'hsl(255, 11%, 22%)',
        shortlyVeryDarkViolet: 'hsl(260, 8%, 14%)'
      },
      backgroundImage: {
        'hero-pattern': "url('./images/bg-shorten-desktop.svg')"
      },
      width: {
        '128': '46rem',
      }
    },
  },
  plugins: [],
}