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
        rocketAnimation:{
          '0% 100%':{
            transform:'translateY(10%)'
          },
          '75%':{
            transform:'translateY(-40%)'
          }
        },
       
      },
      animation:{
          wiggleLeftAndRight:'wiggleLeftAndRight 2s ease-in-out infinite',
          wiggleTopAndBottom:'wiggleTopAndBottom 2s ease-in-out infinite',
          rocketAnimation:'rocketAnimation 3s ease-in-out infinite'

      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
