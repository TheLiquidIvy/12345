import { z } from 'zod';

export const postFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  category: z.string().min(1, "Category is required"),
  image: z.string().url("Invalid URL"),
  readTime: z.string().min(1, "Read time is required"),
});

export const projectFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Invalid URL"),
  tags: z.string(),
});