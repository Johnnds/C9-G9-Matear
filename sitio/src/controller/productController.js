const {render} = require('ejs')
const fs = require('fs')
const path = require('path')

const productFilePath = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const controller = {
    detail: (req, res) => {
        return res.render('productDetail', {
            product : products.find(producto => producto.id === +req.params.id)
        })
    },
    cart: (req, res) => {
        return res.render('productCart')
    },
    listProducts: (req, res) => {
        return res.render('products', {
            products
        })
    }
}

module.exports = controller