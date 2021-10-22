const { body } = require('express-validator');
const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const bcrypt = require('bcryptjs');


module.exports = [
    body('email')
    
    .custom((value, {req}) => {
       
        db.user.findOne({
            where: {
                email :value,
        }
        })
        .then(user =>{
            if (user) {
                if(bcryptjs.compareSync(req.body.password, user.password)){ 
                return true
            }
        }else{
            return false
        }
        })
        .catch(error => console.log(error))
    }).withMessage('credenciales invalidas')
]
