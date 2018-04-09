const router = require('express').Router();
const con = require('../app/database');

// router.get('/test/query', function(req, res) { res.json(JSON.parse(req.query.test)) })

router.post('/', function(req, res){
    var kode_invoice = "INV" + req.session.userdata.userid + (new Date).getMonth() + (new Date).getHours() + (new Date).getSeconds();

        con.query("SELECT * FROM cart where ?", {
            user_id : req.session.userdata.userid,
        },
        function(err,cart) {
            con.query("INSERT into invoice_data set ?", {
                user_id : req.session.userdata.userid,
                kode_invoice : kode_invoice,
                total_harga : req.body.total_harga, //total harga diproses di UI/ejs/react
                nama_penerima : req.body.nama_penerima,
                alamat_penerima : req.body.alamat_penerima,
                telp_penerima : req.body.telp_penerima,
                tanggal : new Date
            })
            
            cart.forEach(x => {
                con.query("INSERT into invoice_detail set ?", {
                    kode_invoice : kode_invoice,
                    nama_product : x.nama,
                    warna : x.warna,
                    size : x.size,
                    qty : x.qty,
                    harga : x.harga
                })
                con.query("SELECT stock from sizeStockProduct where ?", {
                    id : x.sizeandstockProduct_id
                },
                function(err,sizeandstockProduct_id) {
                    con.query("UPDATE sizeStockProduct SET ? where ?",
                    [
                        {
                            stock : sizeandstockProduct_id[0].stock - x.qty
                        },
                        {
                            id : x.sizeandstockProduct_id
                        }
                    ])
                })

            })    

            con.query("DELETE FROM cart where ?", {
                user_id : req.session.userdata.userid
            })
            // res.redirect("/invoice/" + kode_invoice);
            res.json(req.body)
        }) 
})


module.exports = router;

