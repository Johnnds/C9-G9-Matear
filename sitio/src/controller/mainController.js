const path = require('path')
const fs = require('fs')

let db= require('../database/models');
const {Op} = require('sequelize');
   

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
            search : (req,res) => {
    db.Product.findAll({
      include : ['category'],
      where : {
          [Op.or]  : [
            {
                name : {
                    [Op.substring] : req.query.busqueda
                }
            },
            {
                description : {
                    [Op.substring] : req.query.busqueda
                }
            }
        ]
    }
})
    .then(products => {
        return res.render('ProductList',{
            title : "Resultado de la búsqueda",
            products,
            busqueda : req.query.busqueda
        })
    })
    
    .catch(error => console.log(error)) 
    },

    nosotros : (req,res) =>{
        return res.render('nosotros')
    },

 
};
