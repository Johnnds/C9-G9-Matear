const fs = require('fs');
const path = require('path');
const brcypt = require('bcryptjs');
const {validationResult} = require('express-validator')
const usuarios =  JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','users.json'),'utf-8'));
// const usuarios = require('../data/users.json')

module.exports = {
    registro : (req, res) => {
        return res.render('register',{
            title: 'Registro',
        })
    },
    login: (req, res) => {
        return res.render('login')
    },
    processLogin: (req, res) => {

        let errors = validationResult(req)

        // res.send(errors.mapped())

        if(errors.isEmpty()) {
            let usuario = usuarios.find(usuario => usuario.email === req.body.email.trim())
    
            req.session.userLogin = {
                id : usuario.id,
                firstName : usuario.firsName,
                lastName : usuario.lastName,
                gender : usuario.gender,
                image : usuario.image,
                rol : usuario.rol
            }

            res.redirect('/')

        } else {
            return res.render('login', {
                errors : errors.mapped()
            })
        }

    },

    processRegister: (req,res) =>{
            const errors = validationResult(req);
            if (errors.isEmpty()) {
                let {firstName, lastName, email, password, gender,image } =req.body
            
            const usuario ={
               id: usuarios[usuarios.length -1] ? usuarios[usuarios.length -1] .id + 1 : 1,
               firstName : firstName,
               lastName : lastName,
               email: email.trim(),
               password: brcypt.hashSync(password, 10),
               gender,
               rol: 'user',
               image: req.file ? req.file.filename : "default-image.png"
            }
    
            usuarios.push(usuario);
            fs.writeFileSync(path.join(__dirname,'..','data','users.json'),JSON.stringify(usuarios,null,2),'utf-8');
            
            req.session.userLogin = {
                id: usuario.id,
                name: usuario.firstName,
                avatar: usuario.image,
                rol: usuario.rol
            }
            
          return res.redirect('/')
                

            }else{

            return res.render('register',{
                errors: errors.mapped(),
                old: req.body

            })

            }
           
    
    },
    profile: (req, res) => {

    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')    }

}
