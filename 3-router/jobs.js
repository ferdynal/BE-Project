const route = require('express').Router();
const {addJobs, deleteJobs, jobsDetail, updateJobs, listJobs} = require('../2-controller/jobs');

route.post('/add-job/:id_users', addJobs);
route.delete('/delete-job/:id', deleteJobs);
route.get('/job-detail/:id_users', jobsDetail);
route.put('/update-job/:id_users', updateJobs);
route.get('/list-job', listJobs);

module.exports = route