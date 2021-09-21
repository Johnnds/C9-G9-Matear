const {check, body} = require('express-validator');

let validateRegister = [
    check('firstName').notEmpty().withMessage('Este campo es obligatorio.'),
    body('lastName').notEmpty().withMessage('Este campo es obligatorio.'),

    body('email').isEmail().withMessage('Ingresar un email válido'),
    body('password').notEmpty().withMessage('Este campo es obligatorio.'),
]


module.exports = validateRegister;