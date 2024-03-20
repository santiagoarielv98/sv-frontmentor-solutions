import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";

const isDev = process.env.NODE_ENV === "development";
const base = isDev ? "/sv-frontmentor-solutions/" : "";

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    emptyOutDir: true,
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        recipe: resolve(__dirname, "src/recipe-page/index.html"),
        "recipe-react": resolve(__dirname, "src/recipe-page/react/index.html"),
      },
    },
  },
});
