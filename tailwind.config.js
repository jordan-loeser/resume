import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Young Serif", ...defaultTheme.fontFamily.serif],
      },
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
        page: "8.5in",
      },
      colors: {
        accent: "#26a965",
        paper: "#f5f4e8",
        stage: "#dfdfdf",
      },
    },
  },
  plugins: [],
};
