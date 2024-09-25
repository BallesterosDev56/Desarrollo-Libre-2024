import { db } from "../config/db.js"

export async function createEvent(data) {
    try{
        console.log(data);
        
        const [result] = await db.query('INSERT INTO eventos (name, location, regional, fecha, n_inscritos) VALUES (?,?,?,?,?)', [data.name, data.location, data.regional, data.date, 1])
        if(result.affectedRows == 0){
            return false
        }else{
            return 'true'
        }
    }catch(err){
        console.log(err)
    }
}

export async function getEventByRegional(data) {
    try{
        const [result] = await db.query('SELECT * FROM eventos WHERE regional = ?', [data])
        if(result.length == 0){
            return null
        }else{
            return result
        }
    }catch(err){
        console.log(err)
        return 'Error'
    }
}


export async function getEventById(data) {
    try{
        const [result] = await db.query('SELECT * FROM eventos WHERE event_id = ?', [data])
        if(result.length == 0){
            return null
        }else{
            return result[0]
        }
    }catch(err){
        console.log(err)
        return 'Error'
    }
}
