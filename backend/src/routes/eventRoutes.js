import { Router } from "express"
import { getEventsByRegionalController, createEventContoller } from "../controllers/eventController.js"

const router = Router()

router.get("/events/:region",getEventsByRegionalController)
router.post("/events",createEventContoller)

export const eventRouter = router