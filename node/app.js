import express from "express"
import cors from 'cors'
import db from "./database/db.js"

import alumnoRoutes from './routes/routes.js'
import materiaRoutes from './routes/routesM.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/alumnos', alumnoRoutes)
app.use('/materias', materiaRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la base de datos')
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})