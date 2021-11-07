const fs = require('fs');
const path = require('path');
const brcypt = require('bcryptjs');
const { validationResult } = require('express-validator')
const db = require('../database/models');
module.exports = {
    registro: (req, res) => {
        return res.render('register', {
            title: 'Registro',
        })
    },
    processRegister: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const { name, lastName, email, password, gender, avatar} = req.body

            db.User.create({
                name: name.trim(),
                lastName: lastName,
                email,
                password: brcypt.hashSync(password, 10),
                gender,
                rolId: 2,
                image: req.file ? req.file.filename : "default-image.png"
            })
                .then(user => {
                    req.session.userLogin = {
                        id: user.id,
                        Name: user.Name,
                        avatar: user.image,
                        rolId: user.rolId
                    }
                    return res.redirect('perfil')
                })
                .catch(error => console.log(error))
        } else {
            return res.render('register', {
                title: 'registro',
                errores: errors.mapped()
            })
        }
    },


    login: (req, res) => {
        return res.render('login', {
            title: 'login',
        })
    },
    processLogin: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            const {email, recordame} = req.body;
            db.User.findOne({
                where:{
                    email
                }
            })
            .then(user =>{
                req.session.userLogin = {
                    id : user.id,
                    name: user.name,
                    avatar: user.avatar, 
                    rolId: user.rolId
                }
                  if (recordame) {
                res.cookie('mateAr', req.session.userLogin, {
                    maxAge: 10000 * 60 * 60
                })
            }
            return res.redirect('perfil')
            })


        } else {
            return res.render('login', {
                title: 'login',
                errors: errors.mapped()
            })
        }
    },

    perfil: (req, res) => {
        return res.render('perfil')
    },

    logout: (req, res) => {
        req.session.destroy();
        res.cookie('mateAr', '', { maxAge: -1 })
        return res.redirect('/')
    }

}
