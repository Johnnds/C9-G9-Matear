const {render} = require('ejs')
const path = require('path')

const controller = {
    detail: (req, res) => {
        return res.render('productdetail')
    },
    cart: (req, res) => {
        return res.render('productCart')
    }
}

module.exports = controller