const {render} = require('ejs')
const fs = require('fs')
const path = require('path')

const productFilePath = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'))

const controller = {
    detail: (req, res) => {
        return res.render('productdetail')
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