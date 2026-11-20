import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const collections_ = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/collections' }),
  schema: z.object({
    name: z.string(),
    title: z.string().min(20).max(70),
    description: z.string().min(70).max(160),
    order: z.number(),
    lastUpdated: z.coerce.date(),
    status: z.literal('planned'), // nothing is for sale yet; build fails if anything else
    summary: z.string(),
    contents: z.array(z.string()).min(3), // what a pack would contain
    audience: z.string(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(3),
  }),
});

export const collections = { collections: collections_ };
