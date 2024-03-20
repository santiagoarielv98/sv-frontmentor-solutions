/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/blog-preview-card/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(47, 88%, 63%)",
        grey: "hsl(0, 0%, 50%)",
        // "dark-grey": "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
