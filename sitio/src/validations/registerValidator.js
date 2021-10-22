const { check, body } = require('express-validator');
const db = require('../database/models');

module.exports = [
    body('email')
    .custom( value => {
        db.user.findOne({
            where:{
                email: value
            }
        })
        .then(user =>{
            console.log(user);
            if(user){ 
            return Promise.reject('El email ya se encuentra registrado')
        }
     })
     })
]