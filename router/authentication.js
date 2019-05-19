const router = require('express').Router()
const {signUp, signIn} = require('../controller/authentication')

router.post('/signUp', signUp)
router.get('/signIn', signIn)

module.exports = router