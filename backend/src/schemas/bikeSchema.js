import z from 'zod'
 // Mejorar validaciones
export const bikeRegionSchema = z.enum(['Antioquia','Cundinamarca', 'Valle', 'Caldas', 'Atlantico'])

export const updateBikeSchema = z.object({
    userId: z.number(),
    bikeId: z.number(),
    price: z.number(),
    regional: z.enum(['Antioquia','Cundinamarca', 'Valle', 'Caldas', 'Atlantico'])
})

export const payBikeRentSchema = z.object({
    bikeId: z.number(),
    userId: z.number()
})