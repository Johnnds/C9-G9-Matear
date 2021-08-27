const express = require('express')
const router = express.Router()
const {cart, detail, listProducts} = require('../controller/productController')

/* GET products listing. */
router.get('/productDetail', detail)
router.get('/productCart', cart )
router.get('/list', listProducts)

module.exports = router