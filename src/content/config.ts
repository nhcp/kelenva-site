import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    coverImage: z.string().optional(),
    date: z.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
