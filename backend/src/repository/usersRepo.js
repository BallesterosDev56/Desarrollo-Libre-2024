import {db} from '../config/db.js'

export async function getUserByEmail(email) {
    try{
        const [result] = await db.query('SELECT * FROM users WHERE correo = ?', [email])
        if(result.length == 0){
            return null
        }else{
            return result[0]
        }
    }catch(err){
        console.log(err)
    }
}

export async function createUser(data) {
    try{
        const [result] = await db.query('INSERT INTO users (nombre, documento, estrato, correo, contrasena, tipo) VALUES (?,?,?,?,?,?)', [data.userName, data.userDocument, data.userEstrato, data.userEmail, data.userPassword, 'User'])
        if(result.affectedRows == 0){
            return false
        }else{
            return 'true'
        }
    }catch(err){
        console.log(err)
    }
}