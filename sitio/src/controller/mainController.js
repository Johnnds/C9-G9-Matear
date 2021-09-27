
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

    search: (req,res)=>{
        if(req.query.busqueda){
            let resultado = products.filter(product => product.name.toLowerCase().includes(req.query.busqueda.toLowerCase()))
            return res.render('products',{
                title : "Resultado de la búsqueda",
                products : resultado,
                busqueda : req.query.busqueda
            })
        }
        return res.redirect('/products/list')
       
    },
    contacto: (req, res) => {
        return res.render('contacto', {
            contacto
        })
},
    perfil: (req, res) => {
    return res.render('perfil', {
        perfil
    })
}

};
