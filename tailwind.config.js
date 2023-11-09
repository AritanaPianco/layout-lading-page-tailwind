/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
         "sans": ['Open Sans'],
         'headers-callToAction': ['Raleway'] 
      },
      fontWeight: {
        normal: '400',
        larger: '700'
      },
      colors: {
         backgroundColor: 'hsl(218, 28%, 13%)',
         introEmailBackground: 'hsl(217, 28%, 15%)',
         footerBackground: 'hsl(216, 53%, 9%)',
         testemunhasBackground: 'hsl(219, 30%, 18%)',
         callToaction: 'hsl(176, 68%, 64%)',
         callToActionBlue: ' hsl(198, 60%, 50%)'
        
      },
      fontSize: {
          uper: ['14px'],
          down: ['12px']   
      },
      letterSpacing: {
         space: '1.5px'
      }
    },
  },
  plugins: [],
}

