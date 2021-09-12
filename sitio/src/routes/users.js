var express = require('express');
var router = express.Router();
<<<<<<< HEAD
const {registro, login, processLogin, profile, logout} = require('../controller/userController')
const loginValidator = require('../validations/loginValidator')

=======
const multer = require('multer');
const {registro,processRegister,login} = require('../controller/userController');
let validateRegister = require('../validation/userValidator');
>>>>>>> develop


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
<<<<<<< HEAD
router.get('/login', login)
router.post('/login', loginValidator,  processLogin)

router.get('/profile', profile)
router.get('/logout', logout)
=======
router.post('/register',upload.single('image'), validateRegister,processRegister);

//**Login */
router.get('/login',login)
>>>>>>> develop


module.exports = router;
