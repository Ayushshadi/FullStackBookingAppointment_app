const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('app', {
   id:{
    type: Sequelize.INTEGER,
    autoIncrement : true,
    allowNull: false,
    primaryKey:true,
   },
   name:Sequelize.STRING,
   email:Sequelize.STRING,
   phone_no:Sequelize.DOUBLE,
});
module.exports = User;