/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,tsx,ts}"],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
        '110': '110',
        '120': '120',
        '130': '130',
        
      }
    },
    colors: {
      neutral: {
        100: "hsl(0, 0%, 100%)"
      },
      primary: {
        10: "#ffffff",
        100: "hsl(205, 15%, 58%)",
        400: "hsl(296, 57%, 66%)",
        800: "hsl(285, 44%, 25%)",
        900: "hsl(218, 33%, 9%)"
      },
    },
    fontFamily: {
      worksans: ["Work Sans", "sans-serif"],
      poppins: ['Poppins', "sans-serif"]
    }
  },
  plugins: [],
};
