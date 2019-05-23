const router = require('express').Router()
const {signup} = require('../2-controller/authentication')

router.post('/signup', signup)

module.exports = router