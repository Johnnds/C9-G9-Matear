const path = require('path')
const fs = require('fs')

let db= require('../database/models')
   

module.exports ={
    index: (req, res) => {
        db.Product.findAll()
        .then( products =>{
            return res.render('index', {
                products
        })
       
        })
    },
    contacto: (req, res) => {
        return res.render('contacto')
         
},

    search: (req,res)=>{
        if(req.query.busqueda){
            let resultado = products.filter(product => product.name.toLowerCase().includes(req.query.busqueda.toLowerCase()))
            return res.render('products',{
                title : "Resultado de la búsqueda",
                products : resultado,
                busqueda : req.query.busqueda
            })
        }
        return res.redirect('/')
    },

    nosotros : (req,res) =>{
        return res.render('nosotros')
    },

 
};
