var express = require('express');
var app = express();

var session = require('express-session');
app.use(session({secret: 'ssshhhhh'}));
var sess;

const crypto = require('crypto');
const secret = 'abcdefg';

app.set('view engine', 'ejs');

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var cors = require('cors');
app.use (cors());

// LOGIN____________________________________________
var login = require('../routes/login');
app.use('/login', login);


// app.use('/*', function(req, res, next) {
//         console.log(req.session)
//     if (req.session.userdata.role === 1) {
    
        // ADMIN SEASON____________________________________________
        var adminSeason = require('../routes/adminseason')
        app.use('/adminseason', adminSeason)

        // ADMIN KATEGORI____________________________________________
        var adminKategori = require('../routes/adminkategori')
        app.use('/adminkategori', adminKategori)

        // ADMIN PRODUCT____________________________________________
        var adminProduct = require('../routes/adminproduct')
        app.use('/adminproduct', adminProduct)

        // ADMIN WARNA____________________________________________
        var adminWarna = require('../routes/adminwarna')
        app.use('/adminwarna', adminWarna)

        // ADMIN SIZE AND STOCK____________________________________________
        var adminSizeAndStock = require('../routes/adminsizeandstock')
        app.use('/adminsizeandstock', adminSizeAndStock)

        // ADMIN RESULT____________________________________________
        var adminResult= require('../routes/adminresult')
        app.use('/adminresult', adminResult)

        // ADMIN HISTORY INVOICE____________________________________________
        var adminHistoryInvoice= require('../routes/adminhistoryinvoice')
        app.use('/adminhistoryinvoice', adminHistoryInvoice)

//     }

//     // res.status(404).send('Page Not Found')
//     next();
// })
//____________________________________________//____________________________________________

// USER HOME____________________________________________
var home = require('../routes/home')
app.use('/home', home)

// USER KATEGORI____________________________________________
var kategori = require('../routes/kategori')
app.use('/kategori', kategori)

// USER PRODUCT____________________________________________
var product = require('../routes/product')
app.use('/product', product)

// USER DETAIL____________________________________________
var detail = require('../routes/detail')
app.use('/detail', detail)

// USER ADDTOCART____________________________________________
var addToCart = require('../routes/addtocart')
app.use('/addtocart', addToCart)

// USER CART____________________________________________
var cart = require('../routes/cart')
app.use('/cart', cart)

// USER CHECKOUT____________________________________________
var checkout = require('../routes/checkout')
app.use('/checkout', checkout)

// USER INVOICE____________________________________________
var invoice = require('../routes/invoice')
app.use('/invoice', invoice)

// USER HISTORY INVOICE____________________________________________
var historyInvoice = require('../routes/historyinvoice')
app.use('/historyinvoice', historyInvoice)

// USER LOGOUT____________________________________________
var logout = require('../routes/logout')
app.use('/logout', logout)


//____________________________________________//____________________________________________


app.listen(3030,(console.log('run')))