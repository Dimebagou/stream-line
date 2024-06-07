import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Champ requis",
    }),
    password: z.string().min(1, { message: "Champ requis" }),
});
