import { createEvent, getEventByRegional } from "../repository/eventsRepo.js"
import { createEventSchema, regionalEventSchema } from "../schemas/eventSchema.js"
import { ZodError } from "zod"

export async function createEventContoller(req, res) {
    try{
        const data = createEventSchema.parse(req.body)
        const result = await createEvent(data)
        if(!result){
            return res.status(500).json({success: false, message: "Error creating the event"})
        }else{
            return res.status(200).json({success: true, message: 'Event created', result: result})
        }
    }catch(err){
        if(err instanceof ZodError){
            return res.status(500).json({success: false, message: 'Data format error', error: err.errors})
        }else{
            res.status(500).json({success: false, message: 'Internal server error', error: err})
        }
    }
}

export async function getEventsByRegionalController(req,res) {
    try{
        const data = regionalEventSchema.parse(req.params.region)
        const result = await getEventByRegional(data)
        if(!result){
            return res.status(500).json({success: false, message: "No events in this regional"})
        }else{
            return res.status(200).json({success: true, message: 'Successfull get', result: result})
        }
    }catch(err){
        if(err instanceof ZodError){
            return res.status(500).json({success: false, message: 'Data format error', error: err.errors})
        }else{
            res.status(500).json({success: false, message: 'Internal server error', error: err})
        }
    }
}

