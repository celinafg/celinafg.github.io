import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      date: z.coerce.date(),
      excerpt: z.string().optional(),
      image: z.string().optional(),
      imageCover: z.string().optional(),
      role: z.string().optional(),
      project: z.string().optional(),
      order: z.number().optional(),
      specs: z.array(z.string().optional()),
      draft: z.boolean().optional(),
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
      image: z.string().optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
  posts: postsCollection,
};
