const express = require('express');
const router = express.Router();
const {index,search, nosotros,contacto,perfil} =  require('../controller/mainController')

/* GET home page. */
router.get('/', index );
router.get('/search', search);
router.get('/nosotros', nosotros);
router.get('/contacto', contacto);


module.exports = router;
