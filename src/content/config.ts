import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      date: z.coerce.date(),
      excerpt: z.string(),
    }),
});

const postsCollection = defineCollection({
  type: "content",

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      date: z.coerce.date(),
      excerpt: z.string(),
    }),
});

export const collections = {
  projects: projectsCollection,
  posts: postsCollection,
};
