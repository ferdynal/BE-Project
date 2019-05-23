const mysql = require('mysql')

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '12345',
    database : 'project',
    port : '3306'
})

module.exports = db