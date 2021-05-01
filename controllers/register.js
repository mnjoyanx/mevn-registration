const User = require("../models/user")

async function reg(req, res) {
    try {
        const newuser = await User.create({
            title: 'some title'
        })
        res.json(newuser)
    } catch (err) {
        console.log(err);
    }
}

module.exports = reg