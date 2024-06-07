import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email requis",
    }),
    password: z.string().min(1, { message: "Mot de passe requis" }),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email requis",
    }),
    password: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
    username: z.string().min(1, { message: "Pseudo requis" }),
});
