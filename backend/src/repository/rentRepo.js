import { db } from "../config/db.js"

export async function getTotalStonks(){
    try{
        const [result] = await db.query('SELECT sum(price) as total FROM rentals')
        return result
    }catch(err){
        console.log(err)
    }
}

export async function getTotalStonksByRegionalAndMonth(regional, month) {
    try{
        const [result] = await db.query('SELECT sum(price) as total FROM rentals WHERE regional = ? AND month = ? AND estado = ?', [regional, month,true])
        return result[0].total
    }catch(err){
        console.log(err)
    }
}

export async function getTotalStonksByMonth(month) {
    try{
        const [result] = await db.query('SELECT sum(price) as total FROM rentals WHERE month = ? AND estado = ?', [month, true])
        return result[0].total
    }catch(err){
        console.log(err)
    }
}


export async function postNewRent(data) {
    try{
        const [result] = await db.query('INSERT INTO rentals (price, regional,month,estado, id_user, id_bike) VALUES (?,?,?,?,?,?)', [data.price, data.regional, "Septiembre", false, data.userId, data.bikeId])
        if(result.affectedRows == 0){
            return false
        }else{
            return 'true'
        }
    }catch(err){
        console.log(err)
    }
}

export async function payRent(data) {
    try{
        const [result] = await db.query('UPDATE rentals SET estado = ? WHERE id_bike = ? AND id_user = ?', [true, data.bikeId, data.userId])        
        console.log(data.bikeID, data.userId);
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
// SELECT sum(price) as popo FROM rentals WHERE regional = "Medellin" AND month = "Enero"
