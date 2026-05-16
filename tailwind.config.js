/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0B0B0B",
        secondary: "#111111",
        gold: "#D4AF37",
        saffron: "#FF9933",
      },

      fontFamily: {
        sora: ["Sora", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 40px rgba(212,175,55,0.25)",
      },

      backgroundImage: {
        luxury:
          "linear-gradient(to bottom right, #0B0B0B, #111111, #1A1A1A)",
      },
    },
  },

  plugins: [],
};