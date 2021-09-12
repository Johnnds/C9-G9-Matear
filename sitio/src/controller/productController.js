const fs = require('fs')
const path = require('path')
const products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productsDataBase.json'),'utf-8'));


const controller = {
    detail: (req, res) => {
        return res.render('productDetail', {
            producto : products.find(producto => producto.id === +req.params.id)
        })
    },
    cart: (req, res) => {
        return res.render('productCart', {
            products
        })
    },
    listProducts: (req, res) => {
        return res.render('products', {
            products
        })
    }
}

module.exports = controller