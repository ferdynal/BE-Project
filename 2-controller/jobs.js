const db = require('../1-database');

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

// exports.updateJobs = (req, res) => {

// }