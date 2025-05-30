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
      fontFamily: {
        bold: ['"bold"', "sans-serif"],
        regular: ['"normal"', "sans-serif"],
        medium: ['"medium"', "sans-serif"],
      },

      colors: {
        primary: "#714B67",
        secondary: "#F7F7F7",
        heading: "#0A2540",
        paragraph: "#737887",
      },
      spacing: {
        fluid: "100%",
      },
      container: {
        center: true,
        padding: ".6rem",
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      animation: {
        "slow-spin": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
