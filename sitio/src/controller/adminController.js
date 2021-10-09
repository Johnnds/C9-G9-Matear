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
       const{name,price,description,category,image} =req.body;
        
      if (name.trim() != "" && price != "") {
        let producto = {
            id: productos[productos.length - 1].id + 1,
            name,
            price,
            description,
            category,
            image:  req.file ? req.file.filename : 'default-image.png'
        }
    
        productos.push(producto)
    fs.writeFileSync(path.join(__dirname,'..','data','productsDataBase.json'),JSON.stringify(productos,null,2),'utf-8');
    return res.redirect('/')
      }
      return res.send('admin/create' + 'No se agregó producto');
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
            const {name,price,description,category} = req.body;

            productos.forEach(producto => {
                if(producto.id === +req.params.id){
                    producto.name = name;
                    producto.description = description;
                    producto.price = +price;
                    producto.category = category
                }
            });
            fs.writeFileSync(path.join(__dirname,'..','data','productsDataBase.json'),JSON.stringify(productos,null,2),'utf-8');
            return res.redirect('/')
           
        },

        /* controller de edit con metodo delete*/
        destroy : (req,res) => {
            let productosModificados = productos.filter(producto => producto.id !== +req.params.id);
    
            fs.writeFileSync(path.join(__dirname,'..','data','productsDataBase.json'),JSON.stringify(productosModificados,null,2),'utf-8');
            return res.redirect('/')
    
        },

        products : (req,res) =>{
            return res.render('admin/products',{
              productos,
            })
        }
}



module.exports = controller
