const express = require('express')
const router = express.Router()
const {cart, detail, listProducts} = require('../controller/productController')

/* GET products listing. */
router.get('/detail/:id', detail)
router.get('/productCart', cart )
router.get('/list', listProducts)

module.exports = router