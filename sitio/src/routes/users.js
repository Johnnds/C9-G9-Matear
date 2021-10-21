var express = require('express');
const path = require('path')
var router = express.Router();
const {registro, processRegister ,login, processLogin, logout, perfil} = require('../controller/userController')
const loginValidator = require('../validations/loginValidator')
const multer = require('multer');
let validateRegister = require('../validations/userValidator');
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


/* register */
router.get('/register', registro)
router.post('/register',upload.single('image'),registerValidator,validateRegister,processRegister);

//**Login */
router.get('/login',login)
router.post('/login', loginValidator,  processLogin)


router.get('/perfil', perfil);

router.get('/logout', logout);



module.exports = router;
