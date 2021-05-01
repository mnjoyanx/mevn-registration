const User = require("../models/user")
const { ValidationError } = require('sequelize')
const bcrypt = require('bcrypt')

async function registration(req, res) {
    const { username, email } = req.body
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    try {
        const newuser = await User.create({ username, email, password: hashedPassword })
        res.json(newuser)
    } catch (err) {
        res.json(err.errors[0].message)
        console.log(err);
    }
}

module.exports = registration