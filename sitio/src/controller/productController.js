const fs = require('fs')
const path = require('path')
const productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productsDataBase.json'),'utf-8'));


const controller = {
    detail: (req, res) => {
<<<<<<< HEAD
        return res.render('productDetail', {
            product : products.find(producto => producto.id === +req.params.id)
=======
       let producto = productos.find(producto => producto.id === +req.params.id)
       return res.render('productDetail',{
           producto  
>>>>>>> develop
        })
    },
    cart: (req, res) => {
        return res.render('productCart', {
            products
        })
    },
    listProducts: (req, res) => {
        return res.render('products', {
            productos
        })
    }
}

module.exports = controller