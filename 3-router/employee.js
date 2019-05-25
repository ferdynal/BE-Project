const route = require('express').Router();
const {addEmployee, updateProfile} = require('../2-controller/employee')

route.post('/create-profile', addEmployee);
route.post('/update-profile', updateProfile)

module.exports = route