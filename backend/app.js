import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { registerUser, loginUser } from './src/controllers/userController.js'
import { bikeRouter } from './src/routes/bikeRoutes.js'
import { userRouter } from './src/routes/userRoutes.js'
import { getMonthStonks } from './src/controllers/stonksController.js'
const app = express()
app.use(cors())

app.use(express.json())


app.use("/", bikeRouter)
app.use("/", userRouter)

app.post('/sta',getMonthStonks)
app.listen(process.env.PORT, () => {console.log(`Server on port ${process.env.PORT}`)})