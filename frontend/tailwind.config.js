/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // black

        "custom-bg-special":"#63AD44",
        "custom-bg-primary": "#FFFEFE",
        "custom-bg-secondary": "#67B944",
        "custom-bg-tertiary": "#5B9D3D",

        "custom-bg-dark-primary": "#2D2D2C",
        "custom-bg-dark-secondary": "#1E1E1F",

        // white
        "custom-white-text-active": "#FFFEFE",
        "custom-white-text-hover": "#F5F5F5",

        "custom-search-bg": "#",

        // blue427200
        "custom-button-active": "#427200",
        "custom-button-hover": "#0B0A0A",

        // white
        "custom-secondary-button-active": "#68B405",
        "custom-white-button-hover": "#67B944",

        // grey
        "custom-text-primary": "#FFFEFE",
        "custom-text-secondary": "#0B0A0A",
        "custom-text-tertiary": "#68B405",
      },
    },
  },
  plugins: [],
};
