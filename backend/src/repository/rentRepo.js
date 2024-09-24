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
        const [result] = await db.query('SELECT sum(price) as total FROM rentals WHERE regional = ? AND month = ?', [regional, month])
        return result[0].total
    }catch(err){
        console.log(err)
    }
}

export async function getTotalStonksByMonth(month) {
    try{
        const [result] = await db.query('SELECT sum(price) as total FROM rentals WHERE month = ?', [month])
        return result[0].total
    }catch(err){
        console.log(err)
    }
}


// SELECT sum(price) as popo FROM rentals WHERE regional = "Medellin" AND month = "Enero"
