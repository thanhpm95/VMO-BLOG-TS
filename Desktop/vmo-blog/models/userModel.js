'use strict';
const db = require('../config/dbConnect')
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

let User = sequelize.define('User', {
  id:{
      type: Sequelize.INTEGER(11),
      primaryKey: true
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  fullName: Sequelize.STRING,
  gender: Sequelize.BOOLEAN,
  type: {
    type: Sequelize.INTEGER,
    default: 1
  }
});

module.exports = User;