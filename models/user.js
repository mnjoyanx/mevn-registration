const Sequelize = require('sequelize')
const db = require('../config/db')

const User = db.define('user', {
    username: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true, 
        validate: {
            len: {
                args: [3, 10],
                msg: "The username must contain between 3 and 10 characters."
            }
        }
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }, 
 
    password: {
        type: Sequelize.STRING(64),
        is: /^[0-9a-f]{64}$/i
    }

})



module.exports = User 