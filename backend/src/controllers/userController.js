import { createUser, getUserByEmail, getUserByIdRepo } from "../repository/usersRepo.js"
import {ZodError} from 'zod'
import { newUserSchema, userSchema, userIdSchema } from "../schemas/userSchema.js"
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
            if(result.tipo == "Admin"){
                return res.status(201).json({success: true, message: 'Successfull admin login', result: result})
            }else{
                return res.status(201).json({success: true, message: 'Successfull login', result: result})
            }
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

export async function getUserById(req, res) {
    try{
        const data = userIdSchema.parse(req.params.id)
        const result = await getUserById(data)
        if(!result){
            return res.status(500).json({success: false, message: "The user doesn't exist"})
        }else{
            return res.status(201).json({success: true, message: 'Successfull get', result: result})
        }
    }catch(err){
        if(err instanceof ZodError){
            return res.status(500).json({success: false, message: 'Data format error', error: err.errors})
        }else{
            res.status(500).json({success: false, message: 'Internal server error', error: err})
        }
    }
}