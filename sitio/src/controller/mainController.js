
const path = require('path')
const fs = require('fs')
let productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productsDataBase.json'),'utf-8'));

module.exports ={

    index: (req, res) => {
        return res.render('index')
    },

    search: (req,res)=>{
        if(req.query.busqueda){
            let resultado = productos.filter(producto => producto.nombre.toLowerCase().includes(req.query.busqueda.toLowerCase()))
            return res.render('index',{
                title : "Resultado de la búsqueda",
                productos : resultado,
                busqueda : req.query.busqueda
            })
        }
        return res.redirect('/')
       
    }


}