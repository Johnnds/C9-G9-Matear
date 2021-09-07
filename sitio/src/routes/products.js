const express = require('express')
const { destroy } = require('../controller/adminController')
const router = express.Router()
const {cart, detail, listProducts} = require('../controller/productController')

/* GET products listing. */
router.get('/productDetail', detail)
router.get('/productCart', cart )
router.get('/list', listProducts)

router.delete('/delete/:id',destroy);

module.exports = router