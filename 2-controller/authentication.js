const db = require('../1-database');
const bcrypt = require('bcryptjs');

exports.signup = (req,res) => {
    var sqlSearchByEmail = `SELECT email FROM users WHERE email = '${req.body.email}'`;
    db.query(sqlSearchByEmail, (err, result) => {

        // Check email value
        // console.log(result)
        if (err) {
            return res.json({error : err.message});
        }
        if (result.length !== 0) {
            return res.json({error : 'email  il is taken'});
        } else {

            // Check email
            // res.json({message : 'ready input'})
            if (req.body.type === 'employee'){

                // Hash password
                bcrypt.genSalt(10, (err2, salt) => {
                    bcrypt.hash(req.body.password, salt, (err3, hash) => {
                        var sqlNewUser = `INSERT INTO users (email, password)
                                        VALUES ('${req.body.email}', '${hash}')`;
                        db.query(sqlNewUser, (err4, result2) => {
                            
                            // password email ready hash
                            // console.log(result2)
                            if (err4) {
                                return res.json({error : err4.message});
                            }
                            res.json({message : 'register success'});               
                        })
                    })
                })
                
            } else if (req.body.type === 'company') {

                // Hash password
                bcrypt.genSalt(10, (err2, salt) => {
                    bcrypt.hash(req.body.password, salt, (err3, hash) => {                        
                        var sqlNewUser = `INSERT INTO users (email, password, role)
                                            VALUES ('${req.body.email}', '${hash}', 2)`;
                        db.query(sqlNewUser, (err4, result2) => {
                            
                            // password email ready hash
                            if (err4) {
                                return res.json({error : err4.message});
                            }
                            res.json({message : 'register success'});
                        })
                    })
                })                
            }
        }
    })
}

exports.signin = (req,res) => {
    var {email, password} = req.body
    var sqlSearchByEmail = `SELECT * FROM users WHERE email = '${email}'`;
    db.query(sqlSearchByEmail, (err, result) => {
        
        // Check encrypted passwords
        bcrypt.compare(password, result[0].password).then(isMatch => {
            //console.log(isMatch)
            if (!isMatch) {
                return res.json({message : 'password wrong'})
            }
            res.json({
                message : 'login success',
                type: parseInt(result[0].role) === 1 ? 'employee' : 'company'
            })

        })
    })     
}