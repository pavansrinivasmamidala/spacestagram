module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",  ],
  darkMode:"class",
  theme: {
    extend: {
      keyframes:{
        wiggleLeftAndRight:{
          '0% 100%':{
            transform:'translateX(4%)'
          },
          '50%':{
            transform:'translateX(-4%)'
          }
        },
        wiggleTopAndBottom:{
          '0% 100%':{
            transform:'translateY(6%)'
          },
          '50%':{
            transform:'translateY(-6%)'
          }
        },
        backgroundImage: {        
          'space': "url('/home/pavan/Documents/shopify-intern/spacestagram/src/assets/space.jpg')",        
        }
      },
      animation:{
          wiggleLeftAndRight:'wiggleLeftAndRight 2s ease-in-out infinite',
          wiggleTopAndBottom:'wiggleTopAndBottom 2s ease-in-out infinite'

      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
