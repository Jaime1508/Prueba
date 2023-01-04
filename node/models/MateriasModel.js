import db from "../database/db.js";

import {DataTypes} from "sequelize";

const MateriasModel = db.define('materias',{
    materia: {type: DataTypes.STRING},
    promedio: {type: DataTypes.NUMBER},
    semestre: {type: DataTypes.NUMBER},
})

export default MateriasModel