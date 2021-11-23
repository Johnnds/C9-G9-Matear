// var createError = require('http-errors');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// ************ Module Necesarios ************
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const localsUser = require('./middlewares/localsUser')

const adminUserCheck = require('./middlewares/accessAdmin');

const cookiesCheck = require('./middlewares/cookiesCheck');

// ************ express() - (don't touch) ************
const app = express();

//**** method override */
const methodOverride = require('method-override');

//**Session */
const session = require('express-session');

//**validation */
const loginValidator = require('./validations/loginValidator');
const registerValidator = require('./validations/registerValidator');

//****Manejo de formulario */
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//**Configuración metodos PUT y DELETE */
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret : 'mi secreto',
    resave: false,
    saveUninitialized : true
}))

//**Cookie */
app.use(cookiesCheck)

// ************ Template Engine - (don't touch) ************
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');

app.use(localsUser)
// ************ Route System require and use() ************
var mainRouter = require('./routes/main');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products')
const adminRouter = require('./routes/admin');





app.use('/', mainRouter);
app.use('/users',usersRouter,);
app.use('/products', productsRouter)
app.use('/admin', adminUserCheck,adminRouter);
app.use('/cart', require('./routes/cart'))



/*validation*/
app.use(loginValidator);
app.use(registerValidator);


// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


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
