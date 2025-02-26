// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypeUnwrapImages from "./src/plugins/rehype-unwrap-images.mjs";

export default defineConfig({
  integrations: [
    mdx({
      gfm: true,
      remarkPlugins: [],
      rehypePlugins: [rehypeUnwrapImages],
    }),
    tailwind(),
    sitemap(),
  ],
  site: "https://celinafg.github.io",
});
