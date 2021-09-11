const {render} = require('ejs')
const fs = require('fs')
const path = require('path')
const productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productsDataBase.json'),'utf-8'));


const controller = {
    detail: (req, res) => {
        const producto = productos.find(producto => producto.id === +req.params.id)
        return res.render('productdetail', {
           
        })
    },
    cart: (req, res) => {
        return res.render('productCart')
    },
    listProducts: (req, res) => {
        return res.render('products', {
            productos
        })
    }
}

module.exports = controller