const fs = require('fs')
const path = require('path')
const products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productsDataBase.json'),'utf-8'));


const controller = {
    detail: (req, res) => {
       let product = products.find(producto => producto.id === +req.params.id)
        return res.render('productDetail', {
            product,
            productsCategory : products.filter(categoryProduct => categoryProduct.category === product.category && categoryProduct.id != product.id)
        })
    },
    cart: (req, res) => {
        return res.render('productCart', {
            products : products.filter(product => product.price <= 1200) 
                
            })
    },
    listProducts: (req, res) => {
        // res.send(req.session)
        return res.render('products', {
            products
        })
    }
}

module.exports = controller