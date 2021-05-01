const Route = require('express')
const router = Route()
const newreg = require('../controllers/index')


router.post('/reg', newreg)
module.exports = router