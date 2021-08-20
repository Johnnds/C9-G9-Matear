var express = require('express');
var router = express.Router();
const {registro, login} = require('../controller/userController')

/* GET users listing. */
router.get('/register', registro)
router.get('/login', login)

module.exports = router;
