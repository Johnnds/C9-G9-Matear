
const path = require('path')
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

   

module.exports ={
    index: (req, res) => {
        return res.render('index', {
            products
        })
    },

    search : (req,res) => {
        if(req.query.busqueda){
            let resultado = products.filter(producto => producto.name.toLowerCase().includes(req.query.busqueda.toLowerCase()))
            return res.render('index',{
                title : "Resultado de la búsqueda",
                productos : resultado,
                busqueda : req.query.busqueda
            })
        }
        return res.redirect('/')
    },

    nosotros : (req,res) =>{
        return res.render('nosotros')
    }

}
