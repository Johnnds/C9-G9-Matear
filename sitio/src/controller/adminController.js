const fs = require('fs');
const path = require('path');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productsDataBase.json'),'utf-8'));
const categorias = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categorias.json'),'utf-8'));

const controller = {

    //**controller de create con método GET */
    create: (req, res) => {
        return res.render('admin/create',{
            productos,
            categorias,
        })
    },

    //**controller de create con método POST */
    store: (req,res)=>{
       const{nombre,precio,descripcion,categoria,img} =req.body;
        
      if (nombre.trim() != "" && precio != "") {
        let producto = {
            id: productos[productos.length - 1].id + 1,
            nombre,
            precio,
            descripcion,
            categoria,
            img :  req.file ? req.file.filename : 'default-image.png'
        }
    
        productos.push(producto)
    fs.writeFileSync(path.join(__dirname,'..','data','productsDataBase.json'),JSON.stringify(productos,null,2),'utf-8');
    return res.redirect('/')
      }
      return res.send("¡No se agregó ningún producto!")
        },

        //**controller de edit con método GET */

        edit : (req,res) => {
            let producto = productos.find(producto => producto.id === +req.params.id)
        return res.render('admin/edit',{
            productos,
            producto,
            categorias,
        })
        },

        //**controller de edit con método PUT */
        update : (req,res) =>{
            const {nombre,precio,descripcion,categoria} = req.body;

            productos.forEach(producto => {
                if(producto.id === +req.params.id){
                    producto.nombre = nombre;
                    producto.descripcion = descripcion;
                    producto.precio = +precio;
                    producto.categoria = categoria
                }
            });
            fs.writeFileSync(path.join(__dirname,'..','data','productsDataBase.json'),JSON.stringify(productos,null,2),'utf-8');
            return res.redirect('/')
           
        }
}



module.exports = controller
