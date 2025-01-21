import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import { loadRenderers } from "astro:container";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
  const renderers = await loadRenderers([getMDXRenderer()]);
  const container = await AstroContainer.create({ renderers });
  const postsCol = await getCollection("posts");

  const items = [];
  for (const post of postsCol) {
    const { Content } = await post.render();
    const content = await container.renderToString(Content);
    const link = new URL(`/posts/${post.slug}`, context.url.origin).toString();
    items.push({ ...post.data, link, content });
  }

  return rss({
    title: "Thoughts, projects",
    description: "All my thoughts",
    site: context.site,
    stylesheet: "/rss/styles.xsl",
    items,
  });
}
