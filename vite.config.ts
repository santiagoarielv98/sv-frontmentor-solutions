import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
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
      },
    },
  },
});
