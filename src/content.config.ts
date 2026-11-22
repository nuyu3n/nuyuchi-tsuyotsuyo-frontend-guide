import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// お知らせ: src/content/news/ の Markdown を1つずつ読む
const news = defineCollection({
  loader: glob({ base: "./src/content/news", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = { news };
