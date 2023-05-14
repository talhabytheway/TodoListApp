/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mr: ["Mriya Grotesk", "sans-serif"],
        st: ["Stint", "cursive"],
      },
    },
  },
  plugins: [],
};
