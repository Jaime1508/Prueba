import MateriasModel from "../models/MateriasModel.js";

//Metodos para el CRUD

//Mostrar todos los registros
export const getAllMaterias = async (req, res) => {
    try {
        const materias = await MateriasModel.findAll()
        res.json(materias)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getMateria = async (req, res) => {
    try {
        const materia = await MateriasModel.findAll({
            where:{id:req.params.id}
        })
        res.json(materia[0])
    } catch (error) {
        res.json({message: console.message})
    }
}

//Crear un registro
export const createMateria = async (req, res) => {
    try {
        await MateriasModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: console.message})
    }
}

//Actualizar registro
export const updateMateria = async (req, res) => {
    try {
        await MateriasModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: console.message})
    }
}

//Eliminar un registro
export const deleteMateria = async (req, res) => {
    try {
        await MateriasModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: console.message})
    }
}