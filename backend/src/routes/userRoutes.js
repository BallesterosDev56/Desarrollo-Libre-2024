import { Router } from "express"
import { registerUser, loginUser } from "../controllers/userController.js"

const router = Router()

router.post('/register', registerUser)
router.post('/login', loginUser)

export const userRouter = router