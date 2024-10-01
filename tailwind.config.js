/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgnav: "#26144F",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        alegreya: ["Alegreya Sans SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
