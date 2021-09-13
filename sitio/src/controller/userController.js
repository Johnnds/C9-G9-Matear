const fs = require('fs');
const path = require('path');
const brcypt = require('bcryptjs');
const {validationResult} = require('express-validator')
const usuarios = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','users.json'),'utf-8'));

module.exports = {
    registro : (req, res) => {
        return res.render('register',{
            title: 'Registro',
        })
    },

    processRegister: (req,res) =>{
            let errors = validationResult(req);
            if (errors.isEmpty()) {
                let {firstName, lastName, email, password, birthDate, gender, phone } =req.body
            let usuario ={
               id: usuarios[usuarios.length -1] ? usuarios[usuarios.length -1] .id + 1 : 1,
               firstName : firstName,
               lastName : lastName,
               email: email.trim(),
               password: brcypt.hashSync(password, 10),
               birthDate,
               gender,
               phone,
               image: req.file ? req.file.filename : 'default-image.png'
            }
    
            usuarios.push(usuario);
            fs.writeFileSync(path.join(__dirname,'..','data','users.json'),JSON.stringify(usuarios,null,2),'utf-8');
            return res.redirect('/users/login'); 
            }else{
            return res.render('register',{
                errors: errors.mapped(),
                old: req.body
            })
            }
           
    
    },

    login : (req, res) => {
        return res.render('login')
    },

}
