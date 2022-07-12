module.exports = {
    darkMode: 'class',
     content: [
       "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/pages/*.{js,ts,jsx,tsx}",
       "./src/components/**/*.{js,ts,jsx,tsx}",
       "./src/*.{js,ts,jsx,tsx}",
       'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
     ],
    theme: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'md': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
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
        'black': "#000000",
        'whatsapp-green': "#25D366"
      },
      backgroundImage: {
        'cryingBaby': "url('https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1653113041/media/pexels-william-fortunato-6393247_kiygnd.jpg')",
        'playingBaby': "url('https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1653113041/media/pexels-william-fortunato-6392804_j5ql1i.jpg')",
        'posingBaby': "url('https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1653113041/media/kiana-bosman-GvleXr4tIPk-unsplash_pxxj8j.jpg')",
        'momAndBaby': 'url("https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1655605449/media/Mom_me_zyzmba.jpg")'  
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
        require('daisyui'),
        require('flowbite/plugin')
     ],
  }
  