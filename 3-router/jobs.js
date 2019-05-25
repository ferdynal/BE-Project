const route = require('express').Router();
const {addJobs, deleteJobs} = require('../2-controller/jobs');

route.post('/add-job/:id_users', addJobs);
route.delete('/delete-job/:id', deleteJobs);

module.exports = route