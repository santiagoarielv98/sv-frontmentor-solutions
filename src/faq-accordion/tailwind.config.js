/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/faq-accordion/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(292, 42%, 14%)",
        secondary: "hsl(292, 16%, 49%)",
        body: "hsl(275, 100%, 97%)",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
