const router = require('express').Router();
const con = require('../app/database');

router.post('/create/:id?', function(req, res){
        con.query("SELECT * FROM warnaProduct where ?", {
            id : req.params.id
        },
        function(err,warnaproductid) {
            con.query("insert into sizeStockProduct set ?", {
                warnaProduct_id : warnaproductid[0].id,
                size: req.body.size,
                stock: req.body.stock
            });
            // res.redirect("/adminsizeandstock/read/" + warnaproductid[0].id);
            res.json(req.body)
        })
})

router.get('/read/:id?', function(req, res){
        con.query('select * from warnaProduct where ?', {
            id : req.params.id,
        }, function (err, rows1) {
            con.query('select * from sizeStockProduct where ?', {
                warnaProduct_id : req.params.id,
            }, function (err, rows2){
                res.json(rows2)
            })
        }); 
})

router.get('/edit/:id?', function(req, res){
        // res.render("admin_edit_size", {id : req.params.id,sesi:sesi.admin_username});
        res.json(id)
})

router.post('/update/:id?', function(req, res){
        con.query("SELECT * FROM sizeStockProduct where ?", {
            id : req.params.id
        },
        function(err,sizestockproductid) {
            con.query("update sizeStockProduct set ? where ?",
            [
                {
                    size: req.body.size,
                    stock: req.body.stock,
                },
                {
                    id : req.params.id,
                }
            ]);
            // res.redirect("/adminsizeandstock/read/" + sizestockproductid[0].warnaProduct_id);
            res.json(req.body)
        })
})

router.get('/delete/:id?', function(req, res){
        con.query("SELECT * FROM sizeStockProduct where ?", {
            id : req.params.id
        },
        function(err,sizestockproductid) {
            con.query("delete from sizeStockProduct where ?", {
                id: sizestockproductid[0].id
            });
            // res.redirect("/adminsizeandstock/read/" + sizestockproductid[0].warnaProduct_id);
            res.json('deleted')
        })    
})


module.exports = router;