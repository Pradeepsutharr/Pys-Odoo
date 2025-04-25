/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      

      fontFamily:{
        bold:['"bold"', 'sans-serif'],
        regular:['"regular"', 'sans-serif'],
        medium:['"medium"', 'sans-serif'],
      },

      colors: {
        primary: '#714B67',
        secondary: '#F7F7F7',
        heading: "#111827",
        paragraph: "#737887"
    },
    spacing: {
      fluid: "100%",
  },
  container: {
      center: true,
      padding: "1rem",
      screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1300px',
      }
  },
  animation: {
    'slow-spin': 'spin 4s linear infinite',
  },
    },
  },
  plugins: [],
}

