const express = require('express');
const router = express.Router();

const {index,search,contacto,perfil} =  require('../controller/mainController')

/* GET home page. */
router.get('/', index );
router.get('/search', search);
router.get('/contacto', contacto);
router.get('/perfil', perfil);

module.exports = router;
