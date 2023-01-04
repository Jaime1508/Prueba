import express from 'express'
import { createMateria, deleteMateria, getAllMaterias, getMateria, updateMateria } from '../controllers/MateriasController.js'

const routerM = express.Router()

routerM.get('/', getAllMaterias)
routerM.get('/:id', getMateria)
routerM.post('/', createMateria)
routerM.put('/:id', updateMateria)
routerM.delete('/:id', deleteMateria)

export default routerM