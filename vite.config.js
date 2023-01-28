import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      // Alias to import all of the modules through.
      // Example: "~/assets/some-asset"
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
