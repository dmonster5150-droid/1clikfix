import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Vite configuration
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  build: {
    outDir: "dist",
  },
  server: {
    port: 5173,
    host: true,
  },
  base: "/",
});
