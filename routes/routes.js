const { addEmployee, getEmployees, deleteEmployee } = require('../controllers/employee')
const { addProduct, getProducts, deleteProduct } = require('../controllers/product')

const router = require('express').Router()

router.post('/employee/new', addEmployee)
    .get('/employees', getEmployees)
    .delete('/employee/delete/:id', deleteEmployee)
    .post('/product/new', addProduct)
    .get('/products', getProducts)
    .delete('/product/delete/:id', deleteProduct)

module.exports = router