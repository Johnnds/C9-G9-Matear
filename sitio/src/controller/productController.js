const {render} = require('ejs')
const path = require('path')

const controller = {
    detail: (req, res) => {
        return res.render('productDetail')
    },
    cart: (req, res) => {
        return res.render('productCart')
    }
}

module.exports = controller