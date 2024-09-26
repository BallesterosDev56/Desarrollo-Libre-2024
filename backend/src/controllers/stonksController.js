import { getTotalStonksByMonth, getTotalStonksByRegionalAndMonth } from "../repository/rentRepo.js";
import { rentQuerySchema } from "../schemas/rentSchema.js";
import { payBikeRentSchema } from "../schemas/bikeSchema.js";
import { analista, analista2 } from "../utils/analisis.js";
import { ZodError } from "zod";

let regionales = ['Antioquia','Cundinamarca', 'Valle', 'Caldas', 'Quindio']
export async function getMonthStonks(req, res) {
    try{
        const data = rentQuerySchema.parse(req.params.month)
        const stadistics = {
            total: await getTotalStonksByMonth(data),
            regionales: []
        }

        regionales.map(async region => {
            let regionStadistics = {
                name: region,
                totalRegional: await getTotalStonksByRegionalAndMonth(region, data)
            }
            stadistics.regionales.push(regionStadistics)
        })
        setTimeout(()=> {
            res.status(200).json({success: true, message: 'Success query', result: stadistics})
        },1500)
    }catch(err){
        if(err instanceof ZodError){
            return res.status(500).json({success: false, message: 'Data format error', error: err.errors})
        }else{
            res.status(500).json({success: false, message: 'Internal server error', error: err})
        }
    }
}


export async function makePronost(req, res) {
    try{
        let prompt = req.body.prompt
        let response =await  analista(prompt)
        res.status(200).json({success: true, message: "Prompt respone with exit", result: response})
    }catch(err){
        if(err instanceof ZodError){
            return res.status(500).json({success: false, message: 'Data format error', error: err.errors})
        }else{
            res.status(500).json({success: false, message: 'Internal server error', error: err})
        }
    }
}

export async function makeTip(req, res) {
    try{
        let response = await analista2()
        res.status(200).json({success: true, message: "Prompt respone with exit", result: response})
    }catch(err){
        if(err instanceof ZodError){
            return res.status(500).json({success: false, message: 'Data format error', error: err.errors})
        }else{
            res.status(500).json({success: false, message: 'Internal server error', error: err})
        }
    }
}