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
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}