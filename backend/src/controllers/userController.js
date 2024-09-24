import { createUser, getUserByEmail } from "../repository/usersRepo.js"
import {ZodError} from 'zod'
import { newUserSchema, userSchema } from "../schemas/userSchema.js"
export async function registerUser(req, res) {
    try{
        console.log(req.body);
        
        const data = newUserSchema.parse(req.body)
        const result = await createUser(data)
        if((result !== 'true' )){
            return res.status(500).json({success: false, message: 'Error in the register of the user', error: err})
        }else{
            res.status(201).json({success: true, message: 'Successfull register', result: true})
        }
    }catch(err){
        if(err instanceof ZodError){
            return res.status(500).json({success: false, message: 'Data format error', error: err.errors})
        }else{
            res.status(500).json({success: false, message: 'Internal server error', error: err})
        }
    }
}

export async function loginUser(req, res) {
    try{
        const data = userSchema.parse(req.body)
        const result = await getUserByEmail(data.userEmail)
        if(!result){
            return res.status(500).json({success: false, message: "wrong password or email"})
        }else if(data.userPassword == result.contrasena){
            return res.status(201).json({success: true, message: 'Successfull login', result: true})
        }else{
            return res.status(500).json({success: false, message: "wrong password or email"})
        }
    }catch(err){
        if(err instanceof ZodError){
            return res.status(500).json({success: false, message: 'Data format error', error: err.errors})
        }else{
            res.status(500).json({success: false, message: 'Internal server error', error: err})
        }
    }
}