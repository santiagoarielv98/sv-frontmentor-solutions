/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/recipe-page/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          nutmeg: "hsl(14, 45%, 36%)",
          darkRaspberry: "hsl(332, 51%, 32%)",
        },
        neutral: {
          roseWhite: "hsl(330, 100%, 98%)",
          eggshell: "hsl(30, 54%, 90%)",
          lightGrey: "hsl(30, 18%, 87%)",
          wengeBrown: "hsl(30, 10%, 34%)",
          darkCharcoal: "hsl(24, 5%, 18%)",
        },
      },
    },
  },
  plugins: [],
};
