const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('Sprint-2/public'));

app.use(express.static('images'))

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'Sprint-2/views','index.html')));

app.get('/productdetail',(req,res) => res.sendFile(path.join(__dirname,'Sprint-2/views','productdetail.html')));

app.get('/productcart',(req,res) => res.sendFile(path.join(__dirname,'Sprint-2/views','productcart.html')));

app.get('/register',(req,res) => res.sendFile(path.join(__dirname, 'Sprint-2/views','register.html')));

app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'Sprint-2/views','login.html')));


app.listen(port,()=> console.log('Servidor corriendo en el puerto ' + port))