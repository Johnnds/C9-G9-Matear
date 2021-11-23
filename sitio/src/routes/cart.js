const router = require('express').Router()

const {show,add, remove, empty,} = require('../controller/cartController')


router.get('/cart/show',show)
.get('/cart/add/:id',add)
    .get('/cart/remove/:id',remove)
    .get('/cart/empty',empty)
    .get('/products/delete-image/:id')
    .post('/products/add-images/:id')


module.exports = router;