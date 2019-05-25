const route = require('express').Router();
const {addCompany, updateProfile, detailCompany, listCompany} = require('../2-controller/company');

route.post('/create-profile', addCompany);
route.put('/update-profile', updateProfile);
route.get('/list-company', listCompany);
route.get('/detail-profile/:id_users', detailCompany);

module.exports = route