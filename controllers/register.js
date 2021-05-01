const User = require("../models/user")
const bcrypt = require('bcrypt')

async function registration(req, res) {
    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    try { 
        const newuser = await User.create({ username, email, password: hashedPassword })
        res.json(newuser) 
    } catch (err) { 
        const errorHandler = err.errors.map(item => item.message)
        res.json(errorHandler) 
    } 
} 
 
module.exports = registration   