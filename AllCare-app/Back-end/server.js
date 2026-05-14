import express from 'express'
import userRoutes from './src/routes/userRoutes.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.use(userRoutes)

app.listen(8001, () => {
    console.log('Servidor rodando na porta 8001')
})