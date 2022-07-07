module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customPink': 'bg-gradient-to-r from-[#e61a5f] to-[#ca247c]',
        'customBlack': 'rgba(0, 0, 0, 0.7)',
        'customGray': 'rgba(0, 0, 0, 0.25)',
      },
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
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': {  opacity: '1' }
        },
      },
      animation: {
        'fadeIn': "fadeIn 0.5s ease-in"
      }
  }
  },
  plugins: [],
}


