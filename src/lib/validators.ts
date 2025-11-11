import { z } from 'zod';

export const postFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  category: z.string().min(1, "Category is required"),
  image: z.string().url("Invalid URL"),
  readTime: z.string().min(1, "Read time is required"),
});
