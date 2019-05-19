const db = require('../database')

module.exports = {
    // ============================== EMPLOYEE ==============================
    // Get All Profile
    getProfileEmployee : (req,res) => {
        var profileEmployee = `SELECT * FROM profile_employee`
        db.query(profileEmployee, (err,result) => {
            res.send(result)
        })
    },
    // Get Profile By Id
    getProfileEmployeeById : (req,res) => {
        var id = req.params.id
        var profileEmployeeById = `SELECT * FROM profile_employee WHERE id = ${id}`
        db.query(profileEmployeeById, (err,result) => {
            res.send(result)
        })
    },
    // Add Profile
    addProfileEmployee : (req,res) => {
        var data = {
            full_name : req.body.full_name,
            profile_image : req.body.profile_image,
            location : req.body.location,
            social_links : req.body.social_links,
            short_bio : req.body.short_bio,
            contact : req.body.contact,
            upload_resume : req.body.upload_resume,
            portfolio : req.body.portfolio,
            skills : req.body.skills
        }
        // Add New Profile Employee
        var newProfile = `INSERT INTO profile_employee SET?`
        db.query(newProfile, data, (err,result) => {
            if(err) throw err
            //res.send(result)
            res.json({message : 'Add profile success'})
        })
    },
    // Update Profile Employee By Id
    updateProfileEmployeeById : (req,res) => {
        var id = req.params.id
        var {full_name, profile_image, location, social_links, short_bio, contact, upload_resume, portfolio, skills} = req.body
        var updateProfile = `UPDATE profile_employee SET
                             full_name = '${full_name}',
                             profile_image = '${profile_image}',
                             location = '${location}',
                             social_links = '${social_links}',
                             short_bio = '${short_bio}',
                             contact = '${contact}',
                             upload_resume = '${upload_resume}',
                             portfolio = '${portfolio}',
                             skills = '${skills}'
                             WHERE id = ${id}`
        db.query(updateProfile,(err,result) => {
            if(err) throw err
            res.json({message : 'Update profile success'})
        })
    },


    // ============================== COMPANY ==============================
    // Get All Profile
    getProfileCompany : (req,res) => {
        var profileCompany = `SELECT * FROM profile_company`
        db.query(profileCompany, (err,result) => {
            res.send(result)
        })
    },
    // Get Profile By Id
    getProfileCompanyById : (req,res) => {
        var id = req.params.id
        var profileCompanyById = `SELECT * FROM profile_company WHERE id = ${id}`
        db.query(profileCompanyById, (err,result) => {
            res.send(result)
        })
    },
    // Add Profile
    addProfileCompany : (req,res) => {
        var data = {
            name_company : req.body.name_company,
            logo : req.body.logo,
            location : req.body.location,
            desc_industry : req.body.desc_industry,
            website : req.body.website
        }
        // Add New Profile Employee
        var newProfile = `INSERT INTO profile_company SET?`
        db.query(newProfile, data, (err,result) => {
            if(err) throw err
            //res.send(result)
            res.json({message : 'Add profile success'})
        })
    },
    // Edit profile by id
    updateProfileCompanyById : (req,res) => {
        var id = req.params.id
        var {name_company, logo, location, desc_industry, many_company, website} = req.body
        var updateProfile = `UPDATE profile_company SET
                             name_company = '${name_company}',
                             logo = '${logo}',
                             location = '${location}',
                             desc_industry = '${desc_industry}',
                             website = '${website}'
                             WHERE id = ${id}`
        db.query(updateProfile,(err,result) => {
            if(err) throw err
            res.json({message : 'Update profile success'})
        })
    }
}