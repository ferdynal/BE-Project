const route = require('express').Router();
const {addCompany, updateProfile, profileCompany, listCompany} = require('../2-controller/company');

route.post('/create-profile', addCompany);
route.post('/update-profile', updateProfile);
route.get('/list-company', listCompany);
route.post('/detail-company/:id_users', profileCompany)

module.exports = route