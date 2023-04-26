/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/app.component.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      's2condYellow': '#ffe600',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'primary': '#FF4949',
    },
  },
  plugins: [],
}

