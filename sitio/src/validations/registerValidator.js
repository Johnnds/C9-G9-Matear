const { body, check } = require('express-validator');
const db = require('../database/models');


module.exports = [

    check('Name')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({
            min: 2,
            max: 20
        }).withMessage('Como mínimo 2  y máximo 20 caracteres').bail()
        .isAlpha().withMessage('El nombre solo debe contener letras'),

    check('lastName')
        .notEmpty().withMessage('el apellido es obligatorio').bail()
        .isLength({
            min: 4,
            max: 20
        }).withMessage('como minimo 4 y màximo 20 caracteres').bail()
        .isAlpha().withMessage('el apellido solo deve contener letras'),

    check('email')
        .isEmail().withMessage('Debe ingresar un email válido'),
    body('email')
        .custom(value => {
            return db.User.findOne({
                where: {
                    email: value
                }
            })
                .then(User => {
                    if (user) {
                        return Promise.reject('El email ya se encuentra registrado')
                    }
                })
        }),

    check('password')
        .isLength({
            min: 6,
            max: 12
        }).withMessage('La contraseña debe tener 6 y 12 caracteres'),
    body('password2')
        .custom((value, { req }) => {
            if (value != req.body.password) {
                return false
            }
            return true
        }).withMessage('Las contraseñas no coinciden')

]