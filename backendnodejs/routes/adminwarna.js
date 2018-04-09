const router = require('express').Router();
const con = require('../app/database');

router.post('/create/:id?', function(req, res){
        con.query("SELECT * FROM product where ?", {
            id : req.params.id
        },
        function(err,productid) {
            con.query("insert into warnaProduct set ?", {
                product_id : productid[0].id,
                warna: req.body.warna,
            });
            // res.redirect("/adminwarna/read/" + productid[0].id);
            res.json(req.body)
        })
})

router.get('/read/:id?', function(req, res){
        con.query('select * from product where ?', {
            id : req.params.id,
        }, function (err, rows1) {
            con.query('select * from warnaProduct where ?', {
                product_id : req.params.id,
            }, function (err, rows2){
                res.json(rows2)
            })
        }); 
})

router.get('/edit/:id?', function(req, res){
        // res.render("admin_edit_color", {id : req.params.id,sesi:sesi.admin_username});
        res.json(id)
})

router.post('/update/:id?', function(req, res){
        con.query("SELECT * FROM warnaProduct where ?", {
            id : req.params.id
        },
        function(err,warnaproductid) {
            con.query("update warnaProduct set ? where ?",
            [
                {
                    warna: req.body.warna,
                },
                {
                    id : req.params.id,
                }
            ]);
            // res.redirect("/adminwarna/read/" + warnaproductid[0].product_id);
            res.json(req.body)
        })
})

router.get('/delete/:id?', function(req, res){
        con.query("SELECT * FROM warnaProduct where ?", {
            id : req.params.id
        },
        function(err,warnaproductid) {
            con.query("delete from warnaProduct where ?", {
                id : warnaproductid[0].id
            });
            // res.redirect("/adminwarna/read/" + warnaproductid[0].product_id);
            res.json('deleted')
        })    
})


module.exports = router;