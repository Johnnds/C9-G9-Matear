const fs = require('fs');
const path = require('path');

const  db = require('../database/models');



const controller = {

    //**controller de create con método GET */
    create : (req,res) => {
        db.Category.findAll({
            order : [
                ['name','ASC']
            ]
        })
            .then(categorias => res.render('admin/create',{
                categorias,
            }))
            .catch(error => console.log(error))
    },
    store : (req,res) => {

        

            const {name,price,description,image,categoria} = req.body;
       
            db.Product.create(
                {
                    name : name.trim(),
                    description : description.trim(),
                    price : price,
                    image: image,
                    categoryId : categoria
                }
            )

            .catch(error => console.log(error))      
            
            return res.redirect('/')
               
           
        },

        //**controller de edit con método GET */

        edit : (req,res) => {
            let categories = db.Category.findAll({
                order : [
                    ['name']
                ]
            })
            let product = db.Product.findByPk(req.params.id, {
                include : ['category']
            })
            Promise.all(([categories, product]))
                .then(([categories, product]) => {
                    return res.render('admin/edit',{
                        categories,
                        product,
                    })
                })
                .catch(error => console.log(error))
      
        },

        //**controller de edit con método PUT */
        update : (req,res) =>{
            const {name,price,description,category} = req.body;

               db.Product.update(
                   {
                       name: name.trim(),
                       price: price.trim(),
                       description: description.trim(),
                       categoryId: category
                   },
                   {
                       where:{
                           id: req.params.id
                       }
                   }
               )
               .then(()=>{
                return res.redirect('/')
               })
               .catch(error => console.log(error))
           
        },

        /* controller de edit con metodo delete*/
        destroy : (req,res) => {

           db.Product.destroy(
               {
                   where : {
                       id: req.params.id
                   }
               },
           )
           .then(() =>{
            return res.redirect('/')
           })
    
        },

        products : (req,res) =>{
            db.Product.findAll()
            .then(products =>{
                return res.render('admin/products',{
                    products,
                  })
            })
          
        }
}



module.exports = controller
