const router = require('express').Router();
const con = require('../app/database');

// router.get('/test/query', function(req, res) { res.json(JSON.parse(req.query.test)) })

router.get('/', function(req, res){
        con.query('SELECT * FROM cart where ?',{
            user_id : req.session.userdata.userid
        }, function(err,cart) {
            res.json(cart)
        })
})

// USER CART EDIT____________________________________________

router.post('/update/:id?', function(req, res){
    con.query("update cart set ? where ?",
        [
            { qty : req.body.edit_qty },
            { id : req.params.id }
        ]);
        // res.redirect("/cart");
        res.json(req.body)
})

// USER CART DELETE____________________________________________

router.get('/delete/:id?', function(req, res){
        con.query("delete from cart where ?",
        {
            id: req.params.id
        });
        res.json('deleted')
        // res.redirect("/cart");
})

module.exports = router;

