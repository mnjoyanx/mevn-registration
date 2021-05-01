const Sequelize = require('sequelize')

const db = new Sequelize('newsequelize', 'root', '998999', {
    host: 'localhost',
    dialect: 'postgres',
    operatorAliases: false
})

module.exports = db