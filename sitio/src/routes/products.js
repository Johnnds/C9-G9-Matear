const express = require('express')
const { destroy } = require('../controller/adminController')
const router = express.Router()
const {cart, detail, listProducts} = require('../controller/productController')
const accessUsers = require('../middlewares/accessUser')

/* GET products listing. */
router.get('/detail/:id', detail)
router.get('/productCart', accessUsers,cart )
router.get('/list', listProducts)

router.delete('/delete/:id',destroy);

module.exports = router