const router = require('express').Router();
const con = require('../app/database');

// router.get('/test/query', function(req, res) { res.json(JSON.parse(req.query.test)) })

router.post('/', function(req, res){
        con.query("SELECT * FROM sizeStockProduct where ?", {
            id : req.body.size
        }, function(err,rows1) {
            con.query("SELECT * FROM warnaProduct where ?", {
                id : rows1[0].warnaProduct_id
            }, function(err,rows2) {
                con.query("SELECT * FROM product where ?", {
                    id : rows2[0].product_id
                }, function(err,rows3) {
                    con.query("INSERT into cart set ?", {
                        user_id : req.session.userdata.userid,
                        sizeandstockProduct_id : rows1[0].id,
                        nama : rows3[0].nama,
                        harga : rows3[0].harga,
                        warna : rows2[0].warna,
                        size : rows1[0].size,
                        qty : req.body.qtybeli
                    })
                    // res.redirect("/cart");
                    res.json(req.body)
                })
            })
        })
})


module.exports = router;

