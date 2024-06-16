import { z } from "zod";

export const registerSchema = z.object({
    email: z.string().email({
        message: 'Enter a valid email.',
    }),
    username: z.string().min(3, {
        message: 'The username must have at least 3 characters.',
    }),
    password: z.string().min(6, {
        message: 'The password must have at least 6 characters.',
    }),
});