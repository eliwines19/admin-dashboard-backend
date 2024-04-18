const { addEmployee, getEmployees, deleteEmployee } = require('../controllers/employee')

const router = require('express').Router()

router.post('/employee/new', addEmployee)
    .get('/employees', getEmployees)
    .delete('/employee/delete/:id', deleteEmployee)

module.exports = router