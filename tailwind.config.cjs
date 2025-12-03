// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'y-purple': '#5b21b6',
        'y-orange': '#fb923c'
      }
    }
  },
  plugins: []
}
