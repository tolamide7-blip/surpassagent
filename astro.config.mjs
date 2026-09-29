import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://surpassagent.com",
  integrations: [tailwind(), mdx(), sitemap()],
  output: "static",
  adapter: cloudflare({
    imageService: "compile"
  })
});
