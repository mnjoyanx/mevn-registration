const Route = require('express')
const router = Route()
const registration = require('../controllers/register')


router.post('/register', registration)
module.exports = router