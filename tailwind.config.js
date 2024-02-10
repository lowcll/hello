/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#FFFAFA",
        lightText: "#2d2d2d",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#066cfa"
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #7E7E7E, -10px -10px 19px #9D9D9D",
      },
    },
  },
  plugins: [],
};

