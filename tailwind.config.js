/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        serif: ["Young Serif", "ui-serif", "serif"],
        // display: ["Young Serif", "serif"],
      },
      screens: {
        page: "8.5in",
      },
    },
  },
  plugins: [],
};
