const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const Sequelize = require('sequelize');

const controller = {
    detail: (req, res) => {
        let product = db.Product.findByPk(req.params.id, {
            include : ['category']
        })
        let aleatorio = db.Product.findAll({
            order: [[Sequelize.literal("RAND()")]],
            limit: 4,
        });

        Promise.all([product, aleatorio]).then(([product, aleatorio]) => {
            res.render("productDetail", {
                product: product,
                aleatorio: aleatorio,
            });
        })
            .catch(error => console.log(error))
        
    },
    cart: (req, res) => {
        db.Product.findAll()
        .then( products =>{
            return res.render('productCart', {
                products
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