import pluginReactSWC from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  root: "./src",
  publicDir: "../public",
  build: {
    outDir: "../some-other-server/dist/",
    rollupOptions: {
      output: {
        assetFileNames: "[name].[ext]",
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [pluginReactSWC()],
  server: {
    origin: "http://localhost:8000",
    port: 8080,
  },
}));
