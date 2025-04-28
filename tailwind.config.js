/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',  
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter Tight', 'sans-serif'],
        },
        // screens: {
        //   'xl': '1200px'
        // },
      },
    },
    plugins: [],
  }
  