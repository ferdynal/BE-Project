const db = require('../database')

module.exports = {
    // Sign Up
    signUp : (req,res) => {
        // Check Validation
        var sqlCheckUser = `SELECT email FROM users WHERE email = '${req.body.email}'`
        db.query(sqlCheckUser, (err, result) => {
            if(result.length !== 0){
                return res.json({error : 'Email is already taken'})
            }
            
            // Add Users
            var data = {
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                password : req.body.password,
            }
            var sqlNewUser = `INSERT INTO users SET?`
            db.query(sqlNewUser, data, (err,result) => {
                if(err) throw err
                res.json({message: 'Register is success'});
            })
        })
    },
    // Sign In
    signIn : (req,res) => {
        var email = req.body.email
        var password = req.body.password
        var sql = `SELECT email, password
                   FROM users
                   WHERE email = '${email}' AND password = '${password}'`
        db.query(sql, (err,result) => {
            if(err) throw err
            if(!password){
                res.json({message : 'email and password wrong'})
            }else{
                res.json({message : 'email and password match'})
            }           
        })
    }    
}