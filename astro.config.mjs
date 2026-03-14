// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

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

  integrations: [mdx()],
});