var express = require('express');
var router = express.Router();
const {registro, login, processLogin, profile, logout} = require('../controller/userController')
const loginValidator = require('../validations/loginValidator')


/* GET users listing. */
router.get('/register', registro)
router.get('/login', login)
router.post('/login', loginValidator,  processLogin)

router.get('/profile', profile)
router.get('/logout', logout)


module.exports = router;
