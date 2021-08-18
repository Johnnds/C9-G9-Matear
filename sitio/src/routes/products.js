const express = require('express')
const router = express.Router()
const {cart, detail} = require('../controller/productController')

/* GET products listing. */
router.get('/productDetail', detail)
router.get('/productCart', cart )

module.exports = router