import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  // Must be absolute. With a relative base the built index.html references
  // "./assets/index-*.js", which a nested route like /insights/<slug>
  // resolves to /insights/assets/index-*.js. vercel.json rewrites every
  // path to index.html, so that returns HTML instead of JS and the page
  // renders blank. Single-level routes happened to work; the new article
  // route does not.
  base: "/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
