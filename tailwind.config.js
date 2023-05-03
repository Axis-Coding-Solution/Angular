/** @type {import('tailwindcss').Config} */
let colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/app/app.component.{html,ts}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

