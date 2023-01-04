import AlumnosModel from "../models/AlumnosModel.js";

//Metodos para el CRUD

//Mostrar todos los registros
export const getAllAlumnos = async (req, res) => {
    try {
        const alumnos = await AlumnosModel.findAll()
        res.json(alumnos)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getAlumno = async (req, res) => {
    try {
        const alumno = await AlumnosModel.findAll({
            where:{id:req.params.id}
        })
        res.json(alumno[0])
    } catch (error) {
        res.json({message: console.message})
    }
}

//Crear un registro
export const createAlumno = async (req, res) => {
    try {
        await AlumnosModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json({message: console.message})
    }
}

//Actualizar registro
export const updateAlumno = async (req, res) => {
    try {
        await AlumnosModel.update(req.body, {
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
export const deleteAlumno = async (req, res) => {
    try {
        await AlumnosModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: console.message})
    }
}

