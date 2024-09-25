import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import { bikeRouter } from './src/routes/bikeRoutes.js'
import { userRouter } from './src/routes/userRoutes.js'
import { eventRouter } from './src/routes/eventRoutes.js'
import { getMonthStonks } from './src/controllers/stonksController.js'
const app = express()
app.use(cors())

app.use(express.json())


app.use("/", bikeRouter)
app.use("/", userRouter)
app.use("/", eventRouter)
app.get('/stadistics/:month',getMonthStonks)
app.listen(process.env.PORT, () => {console.log(`Server on port ${process.env.PORT}`)})
