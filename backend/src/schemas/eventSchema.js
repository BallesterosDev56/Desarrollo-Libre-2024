import z from "zod"


export const createEventSchema = z.object({
    name: z.string(),  
    location: z.string(),
    regional: z.string(),
    date: z.string()
})

export const regionalEventSchema = z.string()