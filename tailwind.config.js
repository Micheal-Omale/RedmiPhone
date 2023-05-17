/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    extend: {
      screen: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)'},
      },
      keyframes: {
        "open-menu" : {
          '0%' : {Transform: 'scaleY(0)'},
          '8%' : {Transform: 'scaleY(1.2)'},
          '100%' : {Transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu' : 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

