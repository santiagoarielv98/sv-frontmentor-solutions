import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";

const isProd = process.env.NODE_ENV === "production";
const base = isProd ? "/sv-frontmentor-solutions/" : "";

export default defineConfig({
  base,
  root: "src",
  plugins: [react()],
  build: {
    emptyOutDir: true,
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        recipe: resolve(__dirname, "src/recipe-page/index.html"),
        "recipe-react": resolve(__dirname, "src/recipe-page/react/index.html"),
        "social-links": resolve(
          __dirname,
          "src/social-links-profile/index.html",
        ),
      },
    },
  },
});
