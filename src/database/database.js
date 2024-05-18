import Sequelize from "sequelize";
import 'dotenv/config'

export const sequelize = new Sequelize(
    'haciendola', 
    'root',
    process.env.PASS,
    {
        host: 'localhost',
        dialect: 'mysql'
    }

)