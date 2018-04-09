const router = require('express').Router();
const con = require('../app/database');

router.post('/create/:id?', function(req, res){
        con.query("select id,kategori from kategori where ?", {
            id : req.params.id
        },
        function(err,kategoriid) {
            if (!req.files.userfile)
                return res.status(400).send("No files were uploaded.");

            let userfile = req.files.userfile;
            var nama_gambar = uniqid() + "." + req.files.userfile.mimetype.split("/")[1];

            userfile.mv(__dirname + "/images/" + nama_gambar, function(err) {});

            con.query("insert into product set ?", {
                kategori_id : kategoriid[0].id,
                nama : req.body.nama,
                harga : req.body.harga,
                deskripsi : req.body.deskripsi,
                // gambar : nama_gambar,
                tglMasukProduct : new Date
            });
            res.json(req.body)
            // res.redirect("/adminproduct/read/" + kategoriid[0].id);
        })  
})

router.get('/read/:id?', function(req, res){
        con.query('select id,kategori from kategori where ?', {
            id : req.params.id,
        }, function (err, rows1) {
            con.query('select id,nama,harga,deskripsi,gambar,tglMasukProduct from product where ?', {
                kategori_id : req.params.id,
            }, function (err, rows2){
                res.json(rows2)
            })
        }); 
})

router.get('/edit/:id?', function(req, res){
        // res.render("admin_edit_product", {id : req.params.id,sesi:sesi.admin_username});
        res.json(id)
})

router.post('/update/:id?', function(req, res){
        con.query("SELECT * FROM product where ?", {
            id : req.params.id
        },
        function(err,productid) {
            if (!req.files.userfile)
                return res.status(400).send("No files were uploaded.");

            let userfile = req.files.userfile;
            var nama_gambar = uniqid() + "." + req.files.userfile.mimetype.split("/")[1];

            userfile.mv(__dirname + "/images/" + nama_gambar, function(err) {});

            con.query("update product set ? where ?",
            [
                {
                    nama : req.body.nama,
                    harga : req.body.harga,
                    deskripsi : req.body.deskripsi,
                    gambar : nama_gambar
                },
                {
                    id : req.params.id,
                }
            ]);
            res.redirect("/adminproduct/read/" + productid[0].kategori_id);
            res.json(req.body)
        })
})

router.get('/delete/:id?', function(req, res){
        con.query("SELECT * FROM product where ?", {
            id : req.params.id
        },
        function(err,productid) {
            var filePath = __dirname + "/images/" + productid[0].nama_gambar;
            fs.unlinkSync(filePath);

            con.query("delete from product where ?",{
                id: productid[0].id
            });
            // res.redirect("/adminproduct/read/" + productid[0].kategori_id);
            res.send('deleted')
        })
            
})

module.exports = router;