/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      animation: {
        "spin-slow": "spin 2.8s linear infinite",
        "show-x": "show-x 1s ease-out",
        "show-scale": "show-scale 0.5s ease-out",
      },
      keyframes: {
        "show-x": {
          "0%": { transform: "translateX(-450px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        "show-scale": {
          "0%": { transform: "scale(0,0)", opacity: "0" },
          "100%": { transform: "scale(1,1)", opacity: "1" },
        },
      },
      colors: {
        primary: "#bc4fff",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
