import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { registerUser } from './src/controllers/userController.js'

const app = express()

app.use(express.json())
app.use(cors())

app.post('/', registerUser)

app.listen(process.env.PORT, () => {console.log(`Server on port ${process.env.PORT}`)})