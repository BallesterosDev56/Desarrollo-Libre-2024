import { Router } from "express"
import { getEventsByRegionalController, createEventContoller, getEventByIdController } from "../controllers/eventController.js"

const router = Router()

router.get("/events/:region",getEventsByRegionalController)
router.post("/events",createEventContoller)
router.get("/event/:id",getEventByIdController)

export const eventRouter = router