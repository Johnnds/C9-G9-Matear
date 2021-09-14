var express = require('express');
var router = express.Router();
const {registro, processRegister ,login, processLogin, profile, logout} = require('../controller/userController')
const loginValidator = require('../validations/loginValidator')
const multer = require('multer');
const path = require('path')
let validateRegister = require('../validation/userValidator');
const accessUsers = require('../middlewares/accessUser')

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,'./public/images/imageProfiles')
    },
    filename: (req,file,callback) => {
        callback(null,'img-profile' + Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({
    storage
})


/* register */
router.get('/register', registro)
router.post('/register',upload.single('image'), validateRegister,processRegister);

//**Login */
router.get('/login',login)
router.post('/login', loginValidator,  processLogin)


router.get('/profile', profile)
router.get('/logout', logout)


module.exports = router;
