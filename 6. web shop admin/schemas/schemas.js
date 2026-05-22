import * as z from "zod";

export const addNewProductSchema = z.object({
    name: z.string().min(3),
    categoryId: z.coerce.number().positive(),
    stock: z.coerce.number().nonnegative(),
    price: z.coerce.number().nonnegative(),
    description: z.string().optional()
})