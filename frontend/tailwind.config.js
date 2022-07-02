/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      minHeight: {
        'half': '50vh',
      },
      gridTemplateColumns: { 
        'two': '300px minmax(600px,770px)'
      }
    },
  },
  plugins: [],
}
