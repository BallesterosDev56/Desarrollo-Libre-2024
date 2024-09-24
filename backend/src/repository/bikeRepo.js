import { db } from "../config/db.js"
export async function getBikesByRegion(region) {
    try{
        const [result] = await db.query('SELECT * FROM bikes WHERE regional = ? AND estado = false', [region])
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


export async function getBikesById(bikeID) {
    try{
        const [result] = await db.query('SELECT * FROM bikes WHERE bike_id = ?', [bikeID])
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



export async function updateBikeState(bikeID, state) {
    try{
        const [result] = await db.query('UPDATE bikes SET estado = ? WHERE bike_id = ?', [state, bikeID])
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