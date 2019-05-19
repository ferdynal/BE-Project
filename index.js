const express = require('express')
const app = express()
const db = require('./database')
const bodyParser = require('body-parser')
const port = 5000

app.use(bodyParser.json())

const {authRoute, profileRoute} = require('./router')

app.use('/users', authRoute)
app.use('/profile', profileRoute)

// check connection to database
db.connect((err) => {
    if (err) {
        console.log(`error connection ${error.stack}`)
        return
    }
    console.log(`connect on database`)
})

// check connection api
app.listen(port, ()=>console.log(`running on port: ${port}`))