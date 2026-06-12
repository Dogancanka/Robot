import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps every asset reference relative, so the same build works on
// GitHub Pages project sites (/<repo>/) and on Vercel or any static host.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
  },
});
