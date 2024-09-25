import { Router } from "express"
import { getBikes, rentBike, payBikeRent } from "../controllers/bikeController.js"

const router = Router()


router.post('/bikes/:region', getBikes)
router.post('/bike', rentBike)
router.put('/bike', payBikeRent)
export const bikeRouter = router