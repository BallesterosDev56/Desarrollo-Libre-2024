import { createUser } from "../repository/usersRepo.js"
import {ZodError} from 'zod'
import { newUserSchema } from "../schemas/userSchema.js"
export async function registerUser(req, res) {
    try{
        const data = newUserSchema.parse(req.body)
        const result = await createUser(data)
        if((result !== 'true' )){
            return res.status(500).json({success: false, message: 'Error in the register of the user', error: err})
        }else{
            res.status(201).json({success: true, message: 'Successfull register', result: true})
        }
    }catch(err){
        if(err instanceof ZodError){
            res.status(500).json({success: false, message: 'Data format error', error: err.errors})
        }
        res.status(500).json({success: false, message: 'Internal server error', error: err})
    }
}