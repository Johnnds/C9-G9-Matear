const express = require('express')
const { destroy } = require('../controller/adminController')
const router = express.Router()
const {cart, detail, listProducts} = require('../controller/productController')

/* GET products listing. */
<<<<<<< HEAD
router.get('/detail/:id', detail)
=======
router.get('/productDetail/:id', detail)
>>>>>>> develop
router.get('/productCart', cart )
router.get('/list', listProducts)

router.delete('/delete/:id',destroy);

module.exports = router