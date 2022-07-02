/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      minHeight: {
        'half': '50vh',
      },
      gridTemplateColumns: { 
        'auto-fit': 'repeat(auto-fit, minmax(100px, 1fr))',        
        'auto-fill': 'repeat(auto-fill, minmax(100px, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(100px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(100px, 1fr))',      
      }
    },
  },
  plugins: [],
}
