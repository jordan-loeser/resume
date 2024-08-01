/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Arial", "sans-serif"],
      serif: ["Young Serif", "ui-serif", "serif"],
      // display: ["Young Serif", "serif"],
    },
  },
  plugins: [],
};
