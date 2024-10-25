/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgnav: "#26144F",
        main: "#DE0588",
        sec: "#460BCB",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        alegreya: ["Alegreya Sans SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
