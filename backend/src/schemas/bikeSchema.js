import z from 'zod'
 // Mejorar validaciones
export const bikeRegion = z.string().max(100)

export const userSchema = z.object({
    userEmail: z.string(),
    userPassword: z.string()
})
