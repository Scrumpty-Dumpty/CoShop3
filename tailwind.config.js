/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      tablet: "960px",
      desktop: "1248px",
    },
    extend: {
      colors: {
        cream: "#F7F3EC",
      },
    },
  },
  plugins: [],
};
