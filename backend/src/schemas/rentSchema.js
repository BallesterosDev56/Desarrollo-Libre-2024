import z from 'zod'
 // Mejorar validaciones
export const rentQuerySchema = z.enum(['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'])
