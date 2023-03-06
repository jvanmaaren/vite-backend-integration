import pluginReactSWC from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const isDev = command === "serve";

  return {
    base: isDev ? "" : "/dist/",
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
      port: isDev ? 8080 : 8000,
    },
  };
});
