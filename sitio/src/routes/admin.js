const express = require('express');
const router = express.Router();
const multer = require('multer');
const path= require('path')
const {create, edit, store,update, destroy,products} =  require('../controller/adminController');
const accessAdmin = require('../middlewares/accessAdmin')

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,'./public/images/productos')
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
router.post('/create',upload.single('image'), store);

/* edit*/ 
router.get('/edit/:id', edit);
router.put('/edit/:id', update);

/**Delete */
router.delete('/delete/:id',destroy);

//**Product */

router.get('/products',products)




module.exports = router;
