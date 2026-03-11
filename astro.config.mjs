// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.local(),
        name: "GeistMonoNerdFont",
        cssVariable: "--geist-mono-nerd-font",
        options: {
          variants: [
            {
              src: ["./src/assets/fonts/GeistMonoNerdFontMono-Regular.otf"],
              weight: "normal",
              style: "normal",
            },
          ],
        },
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
