import z from 'zod'
 // Mejorar validaciones
export const newUserSchema = z.object({
    userName: z.string().max(100),
    userDocument: z.string().max(11).min(10),
    userEstrato: z.string().max(1).min(1),
    userEmail: z.string(),
    userPassword: z.string()
})

export const userSchema = z.object({
    userEmail: z.string(),
    userPassword: z.string()
})