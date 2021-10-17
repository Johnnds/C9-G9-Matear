const fs = require('fs')
const path = require('path')
const db = require('../database/models')


const controller = {
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include : ['category']
        })
            .then(product => {
                return res.render('productDetail',{
                    product
                })
            })
            .catch(error => console.log(error))
        
    },
    cart: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include : ['category']
        })
            .then(product => {
                return res.render('productCart',{
                    product
                })
            })
            .catch(error => console.log(error))
    },
    listProducts: (req, res) => {
        db.Product.findAll()
        .then( products =>{
            return res.render('productList', {
                products
        })
       
        })
        .catch(error => console.log(error))
    }
}

module.exports = controller