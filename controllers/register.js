const User = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {secret} = require('../config/jwtSecretKey')

const generateAccessToken = (id, username) => {

    const payload = {    
        id, username
    }

    return jwt.sign(payload, secret, {expiresIn: "24h"})
}


async function registration(req, res) {
    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 7)
    try {
        const newuser = await User.create({ username, email, password: hashedPassword })
        const currentUser = await User.findOne({ where: { id: newuser.id } })
        const token = generateAccessToken(currentUser.id, currentUser.username)
        res.json({ newuser, token })
    } catch (err) {
        const errorHandler = err.errors.map(item => item.message)
        res.json(errorHandler) 
    }  
} 
 
module.exports = registration          