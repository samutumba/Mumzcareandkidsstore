module.exports = {
  darkMode: 'class',
   content: [
     "./src/pages/*.{js,ts,jsx,tsx}",
     "./src/components/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {},

    fontFamily: {
      title: ['Raleway', 'sans-serif'],
      titleHeavy: ['Quicksand'],
      p: ['Cabin']
    },

    colors: {
      'green': '#7ecc63',
      'base': "#dadcda",
      'darkBase': "#333433",
      'darkGreen': "#1f550c",
      'gold': "d6ae10",

    },
  },
  plugins: [require("daisyui")],
   daisyui: {
     themes: false,
   },
}
