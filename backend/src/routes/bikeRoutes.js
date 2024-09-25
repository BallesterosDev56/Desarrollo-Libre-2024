import { Router } from "express"
import { getBikes, rentBike, payBikeRent, getBike } from "../controllers/bikeController.js"

const router = Router()

router.get('/bike/:id', getBike)
router.post('/bikes/:region', getBikes)
router.post('/bike', rentBike)
router.put('/bike', payBikeRent)

export const bikeRouter = router