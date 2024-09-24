import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { registerUser, loginUser } from './src/controllers/userController.js'
import { getBikes } from './src/controllers/biciController.js'
const app = express()
app.use(cors())

app.use(express.json())


app.post('/register', registerUser)
app.post('/login', loginUser)
app.post('/bikes/:region', getBikes)
app.listen(process.env.PORT, () => {console.log(`Server on port ${process.env.PORT}`)})