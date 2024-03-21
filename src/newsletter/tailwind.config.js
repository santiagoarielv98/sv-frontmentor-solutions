/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/newsletter/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(4, 100%, 67%)",
        secondary: "hsl(234, 29%, 20%)",
        body: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
