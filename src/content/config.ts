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
      role: z.array(z.string().optional()),
      project: z.string().optional(),
      order: z.number().optional(),
      specs: z.array(z.string().optional()),
      draft: z.boolean().optional().default(false),
      summary: z.string().optional(),
    }),
});

export const experimentsCollection = {
  experiments: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      githubUrl: z.string().url().optional(),
      imageCover: z.string().optional(),
      image: z.string().optional(),
      role: z.array(z.string().optional()),
      draft: z.boolean().optional().default(false),
      tags: z.array(z.string().optional()),
      order: z.number().optional(),
      client: z.string().optional(),
      specs: z.array(z.string().optional()),
      summary: z.string().optional(),
    }),
  }),
};

export const collections = {
  projects: projectsCollection,
  experiments: experimentsCollection,
};
