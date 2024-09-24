import { createUser } from "../repository/usersRepo"
export async function registerUser(req, res) {
    try{
        if(!req.body){
            return res.status(400).json({success: false, message: 'The data is necesary for the register', error: err})
        }
        const result = await createUser(req.body)
        if(!result){
            return res.status(500).json({success: false, message: 'Error in the register of the user', error: err})
        }
        res.status(201).json({success: true, message: 'Successfull register', result: true})
    }catch(err){
        res.status(500).json({success: false, message: 'Internal server error', error: err})
    }
}