import db from "../database/db.js";

import {DataTypes} from "sequelize";

const AlumnosModel = db.define('alumnos',{
    nombre: {type: DataTypes.STRING},
    apellidos: {type: DataTypes.STRING},
    matricula: {type: DataTypes.NUMBER},
    carrera: {type: DataTypes.STRING},
})


export default AlumnosModel
