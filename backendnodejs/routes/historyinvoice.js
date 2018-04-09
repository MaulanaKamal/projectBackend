const router = require('express').Router();
const con = require('../app/database');

router.get('/', function(req, res){
    con.query("SELECT kode_invoice, total_harga, tanggal FROM invoice_data where ?", {
        user_id : req.session.userdata.userid
    },
    function(err,rows) {
        res.json(rows)
    })
})


module.exports = router;