import app from "./app.js";
import { sequelize } from "./database/database.js";


async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(process.env.PORT)
        console.log("Server is listening on port", process.env.PORT)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
  
main();