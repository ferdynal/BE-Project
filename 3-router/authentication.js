const router = require('express').Router();
const {signup, signin} = require('../2-controller/authentication');

router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router