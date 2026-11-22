import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Built, but kept out of the sitemap for now
const UNLISTED_PATHS = new Set(["/cv"]);

export default defineConfig({
  site: "https://mobilteknolojileri.com",
  output: "static",
  trailingSlash: "never",
  // The default ("jsx") drops the space between inline elements on separate lines
  compressHTML: true,
  integrations: [
    // MDX for the case studies (figures, diagrams)
    mdx(),
    react(),
    sitemap({ filter: (page) => !UNLISTED_PATHS.has(new URL(page).pathname) }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light-default",
        dark: "github-dark-default",
      },
      wrap: true,
    },
  },
});
