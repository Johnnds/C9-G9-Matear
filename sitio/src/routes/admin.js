const express = require('express');
const router = express.Router();
const {create, edit, store,update} =  require('../controller/adminController');


/* create */
router.get('/create', create);
router.post('/create', store);

/* edi*/ 
router.get('/edit',edit);
router.put('/edit/:id',update);





module.exports = router;
