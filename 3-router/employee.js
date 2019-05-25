const route = require('express').Router();
const {addEmployee, updateProfile, detailEmployee} = require('../2-controller/employee')

route.post('/create-profile', addEmployee);
route.put('/update-profile', updateProfile);
route.get('/detail-profile/:id_users', detailEmployee);

module.exports = route