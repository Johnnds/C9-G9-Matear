const express = require('express');
const router = express.Router();

const {index,search} =  require('../controller/mainController')

/* GET home page. */
router.get('/', index );
router.get('/search', search);

module.exports = router;
