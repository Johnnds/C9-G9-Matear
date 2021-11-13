const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');

module.exports = {
     registro: (req, res) => {
        return res.render('register', {
            title: 'Registro',
        })
    },
    processRegister : (req,res) => {
     let errors = validationResult(req)

     if (errors.isEmpty()) {
         const {name, lastName, email,password} = req.body;
         db.User.create({
             name: name.trim(),
             lastName: lastName.trim(),
             email,
             password: bcrypt.hashSync(password,10),
             avatar: 'default-av.png',
             rolId: 2
         })
         .then(user => {
             req.session.userLogin = {
                 id: user.id,
                 name: user.name,
                 lastName: user.lastName,
                 email: user.email,
                 avatar: user.avatar,
                 rolId: user.rolId
             }
             return res.redirect('perfil')
         })
         .catch(error => console.log(error))
     }else{
         return res.render('register',{
             errores: errors.mapped()
         })
     }
    },
    login : (req,res) => {
        return res.render('login',{
            title : 'Login',
        })
    },
    processLogin : (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            const {email,recordame} = req.body;
            db.User.findOne({
                where : {
                    email
                }
            })
            .then(user =>{
                req.session.userLogin = {
                    id: user.id,
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email,
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
           .catch(error => console.log(error))
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
