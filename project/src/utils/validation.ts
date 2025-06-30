import { z } from 'zod';

export const productSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title must be less than 100 characters"),
  price: z.number().positive("Price must be positive"),
  description: z.string().min(10, "Description must be at least 10 characters").max(500, "Description must be less than 500 characters"),
  category: z.string().min(1, "Category is required"),
  image: z.string().url("Valid image URL required")
});

export type ProductFormData = z.infer<typeof productSchema>;