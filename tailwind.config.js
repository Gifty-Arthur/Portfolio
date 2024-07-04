/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#FD6F00',
        secondary: '#73A4CF',
        custom1: "#1E1E1E",
        custom2: "#212121"
        

      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },

      keyframes:{
        blink:{
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 2s infinite',
      },
    },
    container: {
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
      
    },
    center: true,

    },
  },
  plugins: [],
}
