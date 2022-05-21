module.exports = {
  darkMode: 'class',
   content: [
     "./src/pages/*.{js,ts,jsx,tsx}",
     "./src/components/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    colors: {
      'green': '#7ecc63',
      'rose': "#d80945",
      'base': "#dadcda",
      'darkBase': "#333433",
      'darkGreen': "#1f550c",
      'night': "#0a0a0a",
      'gold': "#f7b614",
      'ocean': "#8bcacc",
      'gum': "#f6d7dd",
      'facebook-blue': "#1877F2",
      'white': "#FFFFFF",
      'black': "#000000"
    },
    backgroundImage: {
      'cryingBaby': "url('https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1653113041/media/pexels-william-fortunato-6393247_kiygnd.jpg')",
      'playingBaby': "url('https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1653113041/media/pexels-william-fortunato-6392804_j5ql1i.jpg')",
      'posingBaby': "url('https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1653113041/media/kiana-bosman-GvleXr4tIPk-unsplash_pxxj8j.jpg')",
    }, 
    fontFamily: {
      title: ['Raleway', 'sans-serif'],
      p: ['Quicksand', 'sans-serif']
    },
    extend: {

    },
    
  },
   daisyui: {
     themes: false,
   },
   plugins: [
     require('@tailwindcss/typography'),
     require('daisyui')
   ],
}
