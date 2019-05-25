const db = require('../1-database');

exports.addCompany = (req, res) => {
    var sqlSearchByEmail = `SELECT * FROM users WHERE email = '${req.body.email}'`;
    db.query(sqlSearchByEmail, (err, result) => {
        if (err) {
            return res.json({error : err.message});
        }
        var sqlSearchProfileByEmail = `SELECT * FROM profile_company WHERE id_users = ${result[0].id}`;
        db.query(sqlSearchProfileByEmail, (err2, result2) => {
            // console.log(result2)
            if (err2) {
                return res.json({error : err2.message});
            }
            if (result2.length === 0){
                var data = {
                    id_users : result[0].id,
                    name_company : req.body.name_company,
                    logo : req.body.logo,
                    location : req.body.location,
                    desc_industry : req.body.desc_industry,
                    website : req.body.website
                };
                var sqlNewUser = `INSERT INTO profile_company SET?`;
                console.log(sqlNewUser)
                db.query(sqlNewUser, data, (err3, result3) => {
                    if (err3) {
                        return res.json({error: err3.message});
                    }
                    res.json({message : 'add profile success'});
                })
            }
        })

    })
}

exports.profileCompany = (req, res) => {
    // console.log(req.params)
    var id = req.params.id_users;
    var sqlProfileCompany = `SELECT * FROM profile_company WHERE id_users = '${id}'`;
    db.query(sqlProfileCompany, (err, result) => {
        // console.log(result)
        res.send(result);
    })
}

exports.listCompany = (req, res) => {
    var sqlListCompany = `SELECT id_users, name_company, logo, location, desc_industry FROM profile_company`;
    db.query(sqlListCompany, (err, result) => {
        res.send(result);
    })
}

exports.updateProfile = (req, res) => {
    var sqlSearchByEmail = `SELECT * FROM users WHERE email = '${req.body.email}'`;
    db.query(sqlSearchByEmail, (err, result) => {
        if (err) {
            return res.json({error : err.message});
        }
        var {name_company, logo, location, desc_industry, website} = req.body;

        // Update profile by id
        var sqlUpdateCompanyProfile = `UPDATE profile_company
                                        SET
                                        name_company = '${name_company}',
                                        logo = '${logo}',
                                        location = '${location}',
                                        desc_industry = '${desc_industry}',
                                        website = '${website}'
                                        WHERE id_users = ${result[0].id}`;
        db.query(sqlUpdateCompanyProfile, (err2, result2) => {
            if (err2) {
                return res.json({error : err2.message})
            }
            res.json({message : 'Update profile success'})
        })
    })
}