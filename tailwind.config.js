/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontFamily:{
        'importuotaGoogle':['Orbitron', 'sans-serif'],
        'HappyMonkey' :['Happy Monkey', 'cursive'],
      }
    },
  },
  plugins: [],
}

