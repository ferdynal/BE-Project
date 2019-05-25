const db = require('../1-database');


exports.addEmployee = (req, res) => {
    var sqlSearchByEmail = `SELECT * FROM users WHERE email = '${req.body.email}'`;
    db.query(sqlSearchByEmail, (err, result) => {
        // console.log(result)
        if (err) {
            return res.json({error : err.message});
        }
        var sqlSearchProfileByEmail = `SELECT * FROM profile_employee WHERE id_users = ${result[0].id}`;
        db.query(sqlSearchProfileByEmail, (err2, result2) => {
            // console.log(result2)
            if (err2) {
                return res.json({error : err2.message});
            }
            if (result2.length === 0){
                var data = {
                    id_users : result[0].id,
                    full_name : req.body.full_name,
                    profile_image : req.body.profile_image,
                    location : req.body.location,
                    social_links : req.body.social_links,
                    short_bio : req.body.short_bio,
                    contact : req.body.contact,
                    upload_resume : req.body.upload_resume,
                    skills : req.body.skills
                }
                var sqlNewUser = `INSERT INTO profile_employee SET?`;
                // console.log(sqlNewUser)
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

exports.updateProfile = (req, res) => {
    var sqlSearchByEmail = `SELECT * FROM users WHERE email = '${req.body.email}'`;
    db.query(sqlSearchByEmail, (err, result) => {
        if (err) {
            return res.json({error : err.message});
        }
        var {full_name, profile_image, location, social_links, short_bio,
            contact, upload_resume, skills } = req.body;

        // Update profile by id
        var sqlUpdateEmployeeProfile = `UPDATE profile_employee
                                        SET
                                        full_name = '${full_name}',
                                        profile_image = '${profile_image}',
                                        location = '${location}',
                                        social_links = '${social_links}',
                                        short_bio = '${short_bio}',
                                        contact = '${contact}',
                                        upload_resume = '${upload_resume}',
                                        skills = '${skills}'
                                        WHERE id_users = ${result[0].id}`;
        db.query(sqlUpdateEmployeeProfile, (err2, result2) => {
            if (err2) {
                return res.json({error : err2.message})
            }
            res.json({message : 'Update profile success'})
        })
    })
}