/** @type {import('tailwindcss').Config} */
let colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/app/app.component.{html,ts}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      width: {
        '70': '70%',
        
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '767px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

