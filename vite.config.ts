import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    base: "./",
    root: "src",
    build: {
      outDir: "../dist",
    },
  };
});
