import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    base: mode === "github" ? "/KON_portfolio/" : "/",
    build: {
      outDir: "dist"
    },
    server: {
      port: 8080
    },
    preview: {
      port: 8080
    }
  };
});
