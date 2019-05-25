const db = require('../1-database');

// ============================== JOBS ============================== //
exports.addJobs = (req, res) => {
    var id = req.params.id_users;
    var data = {
        id_users: id,
        job_req : req.body.job_req,
        requirements : req.body.requirements,
        location : req.body.location,
        salary : req.body.salary,
        date_post : req.body.date_post,
        date_expire : req.body.date_expire,
        culture : req.body.culture,
        required_skills : req.body.required_skills
    };
    var sqlAddJobs = `INSERT INTO jobs SET?`;
    db.query(sqlAddJobs, data, (err, result) => {
    //console.log(data)
        if (err) {
            return res.json({error: err.message});
        }
        res.json({message : 'add job success'})
    })

}

exports.updateJobs = (req, res) => {
    var id = req.params.id_users;
    var {job_req, requirements, location, salary, date_post, date_expire, culture, required_skills} = req.body
    var sqlUpdateJobs = `UPDATE jobs SET
                         job_req = '${job_req}',
                         requirements = '${requirements}',
                         location = '${location}',
                         salary = ${salary},
                         date_post = '${date_post}',
                         date_expire = '${date_expire}',
                         culture = '${culture}',
                         required_skills = '${required_skills}'
                         WHERE id_users = ${id}`;
    db.query(sqlUpdateJobs, (err, result) => {
        // console.log(result)
        if (err) {
            return res.json({error: err.message});
        }
        res.json({message : 'Update jobs success'});
    })
}

exports.deleteJobs = (req, res) => {
    //console.log(req.params)
    var id = req.params.id;
    var sqlDeleteJobs = `DELETE FROM jobs WHERE id = ${id}`;
    db.query(sqlDeleteJobs, (err, result) => {
        if (err) {
            return res.json({error: err.message});
        }
        res.json({message : 'delete job success'})
    })
}

// ============================== JOBS DETAIL ============================== //
exports.jobsDetail = (req, res) => {
    var id = req.params.id_users;
    var sqlJobsDetail = `SELECT * FROM jobs WHERE id_users = ${id}`;
    db.query(sqlJobsDetail, (err, result) => {
        res.send(result)
    })

}

// ============================== JOBS LIST ============================== //
exports.listJobs = (req, res) => {
    var sqlListJobs = `SELECT id_users, job_req, location, salary, date_post FROM jobs`;
    db.query(sqlListJobs, (err, result) => {
        res.send(result);
    })
}
