const { body } = require('express-validator');
const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const bcrypt = require('bcryptjs');


module.exports = [
    body('email')
    
    .custom((value, {req}) => {
       
         return db.User.findOne({
            where: {
                email :value,
        }
        })
        .then(User =>{
            if (!User || !bcrypt.compareSync(req.body.password, user.password)){
                return Promise.reject()
                }
        }).catch( () => Promise.reject('Credenciales inválidas'))
    })
]
