import { bikeRegionSchema, updateBikeSchema, payBikeRentSchema, bikeIdSchema } from "../schemas/bikeSchema.js"
import { getBikesByRegion, updateBikeState, getBikesById } from "../repository/bikeRepo.js"
import { postNewRent, payRent } from "../repository/rentRepo.js"
import { ZodError } from "zod"

export async function getBikes(req, res){
    try{
        const region = bikeRegionSchema.parse(req.params.region)
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

export async function rentBike(req, res) {
    try{
        const data = updateBikeSchema.parse(req.body)
        const result = await updateBikeState(data.bikeId, true)
        const result2 = await postNewRent(data)
        if(!result || !result2){
            return res.status(500).json({success: false, message: "The bike doesn't exist"})
        }else{
            return res.status(200).json({success: true, message: 'Successfull rent', result: result})
        }
    }catch(err){
        if(err instanceof ZodError){
            return res.status(500).json({success: false, message: 'Data format error', error: err.errors})
        }else{
            res.status(500).json({success: false, message: 'Internal server error', error: err})
        }
    }
}

export async function payBikeRent(req, res){
    try{
        const data = payBikeRentSchema.parse(req.body)
        const result = await updateBikeState(data.bikeId, false)
        const result2 = await payRent(data)
        if(!result || !result2){
            return res.status(500).json({success: false, message: "The bike doesn't exist"})
        }else{
            return res.status(200).json({success: true, message: 'Successfull payment', result: result})
        }
    }catch(err){
        if(err instanceof ZodError){
            return res.status(500).json({success: false, message: 'Data format error', error: err.errors})
        }else{
            res.status(500).json({success: false, message: 'Internal server error', error: err})
        }
    }
}

export async function getBike(req, res) {
    try{
        const region = bikeIdSchema.parse(req.params.id)
        const result = await getBikesById(region)
        
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