"use server";

import bcrypt from "bcrypt";
import * as z from "zod";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail, getUserByUsername } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Champs invalides." };
    }

    const { email, password, username } = validatedFields.data;

    const existingEmail = await getUserByEmail(email);
    const existingUsername = await getUserByUsername(username);  

    if (existingEmail || existingUsername) {
        if (existingEmail) {
            return { error: "Cet email est déjà utilisé. " };
        } else {
            return { error: "Ce pseudonyme est déjà utilisé. " };
        }
    }

    

    

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.create({
        data: {
            email,
            username,
            password: hashedPassword,
        },
    });

    // TODO: send verification token email

    return { succes: "Compte crée avec succès !" };
};
