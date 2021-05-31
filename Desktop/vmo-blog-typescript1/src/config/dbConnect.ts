import { Sequelize } from "sequelize"
import * as config from "../config/config.json";


const sequelize = new Sequelize(`${config.development.dialect}://${config.development.username}:${config.development.password}@${config.development.host}:3306/${config.development.database}`);

// console.log(sequelize);

export default sequelize;