const Sequelize = require('sequelize')
const db = require('../config/db')

const User = db.define('hello', {
    title: Sequelize.STRING
})

module.exports = User 