import Sequelize from "sequelize";
import 'dotenv/config'

const sequelize = new Sequelize('haciendola', 'mysql', process.env.PASS,{

})

