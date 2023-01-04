import {Sequelize} from 'sequelize'

const db = new Sequelize('database_app', 'root', 'Viking999', {
    host:'localhost',
    dialect: 'mysql'
})

export default db