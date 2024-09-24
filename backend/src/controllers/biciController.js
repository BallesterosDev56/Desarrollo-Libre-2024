import { bikeRegion } from "../schemas/bikeSchema.js"
import { getBikesByRegion } from "../repository/bikeRepo.js"
import { ZodError } from "zod"

export async function getBikes(req, res){
    try{
        const region = bikeRegion.parse(req.params.region)
        const result = await getBikesByRegion(region)
        if(!result){
            return res.status(500).json({success: false, message: "No bikes available in this region"})
        }else{
            return res.status(200).json({success: true, message: 'Successfull get', result: result})
        }
    }catch(err){
        if(err instanceof ZodError){
            return res.status(500).json({success: false, message: 'Data format error', error: err.errors})
        }else{
            res.status(500).json({success: false, message: 'Internal server error', error: err})
        }
    }
}