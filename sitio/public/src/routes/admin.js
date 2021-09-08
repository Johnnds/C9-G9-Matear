const express = require('express');
const router = express.Router();
const multer = require('multer');
const path= require('path')
const {create, edit, store,update} =  require('../controller/adminController');


const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,'./public/images')
    },
    filename: (req,file,callback) => {
        callback(null,'img-mate-' + Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({
    storage
})



/* create */
router.get('/create', create);
router.post('/create',upload.single('img'), store);

/* edit*/ 
router.get('/edit/:id', edit);
router.put('/edit/:id', update);





module.exports = router;
