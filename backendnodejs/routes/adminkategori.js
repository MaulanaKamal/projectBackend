const router = require('express').Router();
const con = require('../app/database');

router.post('/create/:id?', function(req, res){
        con.query("SELECT id,season from season where ?", {
            id : req.params.id
        },
        function(err,seasonid) {
            con.query("insert into kategori set ?", {
                season_id : seasonid[0].id,
                kategori: req.body.kategori,
            });
            // res.redirect("/adminkategori/read/" + seasonid[0].id);
            res.json(req.body)
        })
})

router.get('/read/:id?', function(req, res){
        con.query("SELECT id,season from season where ?", {
            id : req.params.id
        }, function(err,rows1) {
            con.query('select id, kategori from kategori where ?', {
                season_id : req.params.id,
            }, function(err,rows2) {
                res.json(rows2) 
            });
        })  
})

router.get('/edit/:id?', function(req, res){
        // res.render("admin_edit_kategori", {id : req.params.id,sesi:sesi.admin_username});
        res.json(id)
})

router.post('/update/:id?', function(req, res){
        con.query("SELECT * FROM kategori where ?", {
            id : req.params.id
        },
        function(err,kategoriid) {
            con.query("update kategori set ? where ?",
            [
                {
                    kategori : req.body.kategori,
                },
                {
                    id : req.params.id,
                }
            ]);
            // res.redirect("/adminkategori/read/" + kategoriid[0].season_id);
            res.json(req.body)
        })
})

router.get('/delete/:id?', function(req, res){
        con.query("SELECT * FROM kategori where ?", {
            id : req.params.id
        },
        function(err,kategoriid) {
            con.query("DELETE FROM kategori where ?", {
                id: kategoriid[0].id
            });
            // res.redirect("/adminkategori/read/" + kategoriid[0].season_id);
            res.json('delete')
        })    
})

module.exports = router;
