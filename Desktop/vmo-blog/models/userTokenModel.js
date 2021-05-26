'use strict';
const db = require('../config/dbConnect')
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

let UserToken = sequelize.define('UserToken', {
  id:{
      type: Sequelize.INTEGER(11),
      primaryKey: true
  },
  userId:{
    type: Sequelize.INTEGER(11),
  },
  token:{
    type: Sequelize.STRING
  }
});

module.exports = UserToken;