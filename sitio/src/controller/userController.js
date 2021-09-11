const {render} = require('ejs')
const { validationResult } = require('express-validator')
const path = require('path')
const fs = require('fs')
const bcrypt = require('bcryptjs')
const users = require('../data/users.json')

module.exports = {
    registro : (req, res) => {
        return res.render('register')
    },
    login: (req, res) => {
        return res.render('login')
    },
    processLogin: (req, res) => {

        let errors = validationResult(req)

        // res.send(errors.mapped())

        if(errors.isEmpty()) {
            let user = users.find(user => user.email === req.body.email.trim())

            req.session.userLogin = {
                id : user.id,
                name : user.name,
                lastName : user.lastName,
                avater : user.avatar,
                rol : user.rol
            }

            res.redirect('/products')

        } else {
            return res.render('login', {
                errors : errors.mapped()
            })
        }

    },
    profile: (req, res) => {

    },
    logout: (req, res) => {
        req.session.destroy()
    }
    
}