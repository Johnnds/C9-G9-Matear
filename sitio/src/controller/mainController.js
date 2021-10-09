
const path = require('path')
const fs = require('fs')
const products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productsDataBase.json'),'utf-8'));
   

module.exports ={
    index: (req, res) => {
        return res.render('index', {
            products
        })
    },
    contacto: (req, res) => {
        return res.render('contacto')
         
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
        return res.redirect('/')
    },

    nosotros : (req,res) =>{
        return res.render('nosotros')
    },

 
};
