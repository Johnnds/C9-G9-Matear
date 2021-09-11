var express = require('express');
var router = express.Router();
const multer = require('multer');
const {registro,processRegister,login} = require('../controller/userController');
let validateRegister = require('../middlewares/userValidator');


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


module.exports = router;
