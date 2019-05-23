const db = require('../1-database');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const transporter = require('../helper/nodemailer')

exports.signup = (req,res) => {
    var sqlSearchByEmail = `SELECT email FROM users WHERE email = '${req.body.email}`;
    db.query(sqlSearchByEmail, (error, result) => {
        if (error) {
            return res.json({error : error.message});
        }
        if (result.length !== 0) {
            return res.json({error : 'email is taken'})
        } else {
            if (req.body.type === 'employee'){
                var {first_name, last_name, email, password} = req.body
                var sqlNewUser = `INSERT INTO users (first_name, last_name, email, password, role)
                                  VALUES ('${first_name}', '${last_name}', '${email}', '${password}', 1)`
                db.query(sqlNewUser, (error, result2))
                res.json({message : 'sign up success'})
            }
            if (req.body.type === 'company'){
                var {first_name, last_name, email, password} = req.body
                var sqlNewUser = `INSERT INTO users (first_name, last_name, email, password, role)
                                  VALUES ('${first_name}', '${last_name}', '${email}', '${password}', 2)`
                db.query(sqlNewUser, (error, result2))
                res.json({message : 'sign up success'})
            }
        }
    })
}

// exports.signin = (req, res) => {

// }