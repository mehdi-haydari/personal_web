import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ isSsrBuild }) => ({
  base: "./",
  plugins: [react()],
  publicDir: isSsrBuild ? false : "public",
  build: isSsrBuild
    ? {}
    : {
        rolldownOptions: {
          input: [
            fileURLToPath(new URL("./index.html", import.meta.url)),
            fileURLToPath(new URL("./projects/real-estate-voice-assistant/index.html", import.meta.url)),
          ],
        },
      },
}));
