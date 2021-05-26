import Sequelize from "sequelize"

const sequelize = new Sequelize('VmoBlog', 'root', 'Thanhkid1412ubqn@@', {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;

