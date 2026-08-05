import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import personaRouter from './routes/persona.js'
import conectarDB from './db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api/persona', personaRouter)

app.get('/', (req, res) => {
  res.json({ mensaje: 'Server funcionando ✅' })
})

conectarDB()

app.listen(PORT, () => {
  console.log(`Server corriendo en puerto ${PORT}`)
})