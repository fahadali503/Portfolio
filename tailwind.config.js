const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Poppins: ['Poppins', "sans-serif"],
      DancingScript: ['Dancing Script', "cursive"],
      Rouge: ['Rouge Script', 'cursive']
    },
    screens: {
      'xs': '400px',
      'xss': '320px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}