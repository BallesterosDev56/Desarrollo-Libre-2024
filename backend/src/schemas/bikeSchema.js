import z from 'zod'
 // Mejorar validaciones
export const bikeRegion = z.enum(['Antioquia','Cundinamarca', 'Valle', 'Caldas', 'Atlantico'])

export const userSchema = z.object({
    userEmail: z.string(),
    userPassword: z.string()
})
