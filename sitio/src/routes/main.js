const express = require('express');
const router = express.Router();

const {index,search, nosotros} =  require('../controller/mainController')

/* GET home page. */
router.get('/', index );
router.get('/search', search);
router.get('/nosotros', nosotros);

module.exports = router;
