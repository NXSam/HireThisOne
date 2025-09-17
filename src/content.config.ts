import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
            category: z.string().optional(),
			author: z.string().optional(),
			showImage: z.boolean().optional(),
			showVideo: z.boolean().optional(),
			YT: z.string().optional(),
			alt: z.string().optional(),
		}),
});

const guides = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/guides', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
            category: z.string().optional(),
			author: z.string().optional(),
			showImage: z.boolean().optional(),
			showVideo: z.boolean().optional(),
			YT: z.string().optional(),
			alt: z.string().optional(),
		}),
});

export const collections = { blog, guides };
