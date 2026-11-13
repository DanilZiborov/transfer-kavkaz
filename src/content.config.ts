import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const routes = defineCollection({
  loader: file('src/content/routes.json'),
  schema: ({ image }) => z.object({
    id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string().trim().min(1),
    description: z.string().trim().min(1),
    images: z.array(z.object({
      src: image(),
      alt: z.string().trim().min(1),
    })).min(1),
    priceFrom: z.number().int().positive().optional(),
    featured: z.boolean(),
    order: z.number().int().nonnegative(),
    seo: z.object({
      title: z.string().trim().min(1),
      description: z.string().trim().min(1),
    }),
  }),
});

export const collections = { routes };
