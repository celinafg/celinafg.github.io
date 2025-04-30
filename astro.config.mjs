// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypeUnwrapImages from "./src/plugins/rehype-unwrap-images.mjs";
import remarkResponsiveTables from "./src/plugins/remark-responsive-tables";
export default defineConfig({
  integrations: [
    mdx({
      gfm: true,
      remarkPlugins: [remarkResponsiveTables],
      rehypePlugins: [rehypeUnwrapImages],
      extendMarkdownConfig: true,
      smartypants: true,
    }),
    tailwind(),
    sitemap(),
  ],
  site: "https://celinafg.github.io",
});
