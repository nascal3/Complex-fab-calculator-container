const Sequelize = require('sequelize');
const connection= require('./databaseConnection');

const valueModel = connection.define('value', {
  number: {
    type: Sequelize.INTEGER
  }
});

module.exports = valueModel;
