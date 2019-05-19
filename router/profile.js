const router = require('express').Router()
const {getProfileEmployee,
       getProfileEmployeeById,
       addProfileEmployee,
       updateProfileEmployeeById,
       getProfileCompany,
       getProfileCompanyById,
       addProfileCompany,
       updateProfileCompanyById} = require('../controller/profile')

router.get('/employee', getProfileEmployee)
router.get('/employee/:id', getProfileEmployeeById)
router.get('/company', getProfileCompany)
router.get('/company/:id', getProfileCompanyById)
router.post('/addProfileEmployee', addProfileEmployee)
router.post('/addProfileCompany', addProfileCompany)
router.put('/updateProfileEmployee/:id', updateProfileEmployeeById)
router.put('/updateProfileCompany/:id', updateProfileCompanyById)

module.exports = router