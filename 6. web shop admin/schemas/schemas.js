import * as z from "zod";

export const addNewProductSchema = z.object({
    name: z.string().min(3),
    categoryId: z.int().positive(),
    stock: z.number().nonnegative(),
    price: z.number().nonnegative(),
    description: z.string().optional()
})