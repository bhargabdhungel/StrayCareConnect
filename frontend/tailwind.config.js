/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // black
        "custom-bg-primary": "#000000",
        "custom-bg-secondary": "#16181C",

        // white
        "custom-white-text-active": "#EFF3F4",
        "custom-white-text-hover": "#D7DCDF",

        "custom-search-bg": "#202327",

        // blue
        "custom-button-active": "#1D9BF0",
        "custom-button-hover": "#2A91D8",

        // white
        "custom-white-button-active": "#EFF3F4",
        "custom-white-button-hover": "#D7DCDF",

        // grey
        "custom-text-primary": "#E7E9EA",
        "custom-text-secondary": "#C9CCCF",
      },
    },
  },
  plugins: [],
};
