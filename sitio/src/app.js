// var createError = require('http-errors');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// ************ Module Necesarios ************
const express = require('express');
const path = require('path');

// ************ express() - (don't touch) ************
const app = express();

//**** method override */
const methodOverride = require('method-override');


//****Manejo de formulario */
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//**Configuración metodos PUT y DELETE */
app.use(methodOverride('_method'));


// ************ Template Engine - (don't touch) ************
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');

// ************ Route System require and use() ************
var mainRouter = require('./routes/main');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products')
const adminRouter = require('./routes/admin')


app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter)
app.use('/admin', adminRouter)


// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
