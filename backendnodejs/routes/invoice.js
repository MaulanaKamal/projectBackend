const router = require('express').Router();
const con = require('../app/database');

router.get('/:id?', function(req, res){
    con.query("SELECT * FROM invoice_data where ?", {
        kode_invoice : req.params.id
    },
    function(err,rows1) {
        con.query("SELECT * FROM invoice_detail where ?", {
            kode_invoice : req.params.id
        },
        function(err,kodeinvoice) {
            res.json(kodeinvoice)
            // res.render("user_invoice",{data1 : rows1, data2: rows2, sesi: req.session.user_nama})
        })
    })
})


module.exports = router;