import z from 'zod'
 // Mejorar validaciones
export const bikeRegionSchema = z.enum(['Antioquia','Cundinamarca', 'Valle', 'Caldas', 'Quindio'])

export const updateBikeSchema = z.object({
    userId: z.string(),
    bikeId: z.string(),
    price: z.number(),
    regional: z.enum(['Antioquia','Cundinamarca', 'Valle', 'Caldas', 'Quindio'])
})

export const bikeIdSchema = z.string()

export const payBikeRentSchema = z.object({
    bikeId: z.number(),
    userId: z.number()
})