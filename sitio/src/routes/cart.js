const router = require('express').Router()

const {show} = require('../controller/cartController')


router.get('/cart/show',show)


module.exports = router;