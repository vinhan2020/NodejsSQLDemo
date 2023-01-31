const {Sequelize} = require('sequelize')

const db = new Sequelize('postgres', 'postgres', 'Pass@123', {
    host: 'localhost',
    dialect: "postgres",
    logging: false,
  });



module.exports = db