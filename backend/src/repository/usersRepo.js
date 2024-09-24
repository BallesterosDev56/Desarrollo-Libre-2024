import {db} from '../config/db.js'

export async function getUserByName(name) {
    try{
        const [result] = await db.query('SELECT * FROM users WHERE nombre = ?', [name])
        if(!result){
            return null
        }else{
            return result[0]
        }
    }catch(err){
        console.log(err)
        return 'Error'
    }
}

export async function createUser(data) {
    try{
        const [result] = await db.query('INSERT INTO users (nombre, documento, estrato, correo, contrasena, tipo) VALUES (?,?,?,?,?,?)', [data.userName, data.userDocument, data.userEstrato, data.userEmail, data.userPassword, 'User'])
        if(result.affectedRows == 0){
            return null
        }else{
            return true
        }
    }catch(err){
        console.log(err)
        return 'Error'
    }
}