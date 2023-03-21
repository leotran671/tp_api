const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tp_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
