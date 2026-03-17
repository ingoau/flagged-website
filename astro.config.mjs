// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
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

  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "astro",
      }),
    ],
  },

  integrations: [mdx()],
  adapter: vercel(),
});
