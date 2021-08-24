const fs = require('fs');
const path = require('path');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productsDataBase.json'),'utf-8'));

const controller = {
    create: (req, res) => {
        return res.render('admin/create',{
            productos
        })
    },
    store: (req,res)=>{
        const{nombre,precio,descripcion,categoria,img} =req.body;

                 let producto = {
                     id: productos[productos.length - 1].id + 1,
                     nombre,
                     precio,
                     descripcion,
                     categoria,
                     img,
                 }

            
            productos.push(producto)
        fs.writeFileSync(path.join(__dirname,'..','data','productsDataBase.json'),JSON.stringify(productos,null,2),'utf-8');
        return res.redirect('/')
        },

        edit : (req,res) => {
            res.render('admin/edit')
        },
        update : (req,res) =>{}
}



module.exports = controller
