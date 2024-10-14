import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Roboto", "Arial", "sans-serif"],
        // serif: ["Young Serif", "ui-serif", "serif"],
        display: ["Young Serif", ...defaultTheme.fontFamily.serif],
      },
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
        page: "8.5in",
      },
      colors: {
        mahogany: "#270000",
        coral: "#ff2f2f",
        tan: "#f9dcc5",
      },
    },
  },
  plugins: [],
};
