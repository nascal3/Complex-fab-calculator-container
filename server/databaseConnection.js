const keys = require('./keys');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  keys.database,
  keys.user,
  keys.password,
  {
    dialect: 'mysql',
    host: keys.host
  }
);

module.exports = sequelize;
