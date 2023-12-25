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
