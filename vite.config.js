import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client",
  build: {
    outDir: path.resolve(__dirname, "client/dist"),
    emptyOutDir: true,
  },
  plugins: [react()],
});