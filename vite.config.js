import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        info: resolve(__dirname, "src/info/index.html"),
        search: resolve(__dirname, "src/search/index.html"),
        watchLater: resolve(__dirname, "src/user/watch-later/index.html"),
      },
    },
  },
});
