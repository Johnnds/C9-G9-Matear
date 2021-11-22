const {body,check} = require('express-validator');
const db = require('../database/models')


module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio').bail()
    .isLength({
        min:4,
        max:20
    }).withMessage('Como minimo 4 y màximo 20 caracteres').bail()
    .isAlpha().withMessage('El nombre deve contener letras'),

    check('lastName')
    .notEmpty().withMessage('El apellido es obligatorio').bail()
    .isLength({
        min:4,
        max:20
    }).withMessage('Como minimo 4 y màximo 20 caracteres').bail()
    .isAlpha().withMessage('El apellido deve contener letras'),


    check('email')
    .notEmpty().withMessage('El email es obligatorio').bail()
    .isEmail().withMessage('Debes ingresar un maeil valido'),

    body('email')
    .custom( value => {
       
        return db.User.findOne({
            where : {
                email : value
            }
        })
            .then(user => {
                if(user){
                    return Promise.reject('El email ya se encuentra registrado')
                }
            })
    }),

    check('password')
    .isLength({
        min : 6,
        max :15
    }).withMessage('La contraseña de tener 6 y 15 caracteres'),

    
]