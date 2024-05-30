/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          primary: "#00DDB3",
          tertiary: "#1E1E1E"
      },
      fontFamily:{
        poppins : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
