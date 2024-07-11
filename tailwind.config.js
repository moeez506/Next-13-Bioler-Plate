// @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#4B5FC3",
        secondary: "#F6C575",
        lightBlack: "#161D4A",
        slate: "#313D48",
        danger: "#EA3E3E",
        gray: "#748092",
        pink: "#F4B6B5",
        default: "#DFE5EF",
        "primary-hover": "#D0BEF2",
        "secondary-hover": "#4146ad",
        "primary-light": "#fffbd7",
      },
    },
  },
  plugins: [],
};
