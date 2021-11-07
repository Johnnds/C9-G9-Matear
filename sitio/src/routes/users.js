var express = require('express');
const path = require('path')
var router = express.Router();
const {registro, processRegister ,login, processLogin, logout, perfil} = require('../controller/userController')
const multer = require('multer');

const accessUsers = require('../middlewares/accessUser')

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,'./public/images/imageProfile')
    },
    filename: (req,file,callback) => {
        callback(null,'profile-' + Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({
    storage
})

const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');


/* register */
router.get('/register', registro);
router.post('/register',upload.single('image'),registerValidator,processRegister);

//**Login */
router.get('/login',login);
router.post('/login', loginValidator,processLogin);


router.get('/perfil', perfil);

router.get('/logout', logout);



module.exports = router;
