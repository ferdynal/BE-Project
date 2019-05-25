const express = require('express');
const app = express();
const db = require('./1-database');
const bodyParser = require('body-parser');
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const {authRoute,
       employeeRoute,
       companyRoute,
       jobsRoute} = require('./3-router');

// Routes
app.use('/users', authRoute);
app.use('/profileEmployee', employeeRoute);
app.use('/profileCompany', companyRoute);
app.use('/jobs', jobsRoute)

// check connection to database
db.connect((err) => {
    if (err) {
        console.log(`error connection ${error.stack}`);
        return
    }
    console.log(`connect on database`);
})

// check connection api
app.listen(port, ()=>console.log(`running on port: ${port}`));