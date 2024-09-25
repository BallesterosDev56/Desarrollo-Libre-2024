import { getTotalStonksByMonth, getTotalStonksByRegionalAndMonth } from "../repository/rentRepo.js";
import { rentQuerySchema } from "../schemas/rentSchema.js";
import { payBikeRentSchema } from "../schemas/bikeSchema.js";
import { ZodError } from "zod";

let regionales = ['Antioquia','Cundinamarca', 'Valle', 'Caldas', 'Atlantico']
export async function getMonthStonks(req, res) {
    try{
        const data = rentQuerySchema.parse(req.body)
        const stadistics = {
            total: await getTotalStonksByMonth(data.month),
            regionales: []
        }

        regionales.map(async region => {
            let regionStadistics = {
                name: region,
                totalRegional: await getTotalStonksByRegionalAndMonth(region, data.month)
            }
            stadistics.regionales.push(regionStadistics)
        })
        setTimeout(()=> {
            res.status(200).json({success: true, message: 'Success query', result: stadistics})
        },100)
    }catch(err){
        if(err instanceof ZodError){
            return res.status(500).json({success: false, message: 'Data format error', error: err.errors})
        }else{
            res.status(500).json({success: false, message: 'Internal server error', error: err})
        }
    }
}
