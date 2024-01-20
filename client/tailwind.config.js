/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,tsx,ts}"],
  theme: {
    extend: {},
    colors: {
      neutral: {
        100: "hsl(0, 0%, 100%)"
      },
      primary: {
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
