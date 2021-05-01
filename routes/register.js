const Route = require('express')
const router = Route()
const newreg = require('../controllers/register')


router.post('/register', newreg)
module.exports = router