const router = require('express').Router();
const con = require('../app/database');

router.get('/read', function(req, res){
    con.query("SELECT kode_invoice, total_price, time FROM invoice_data", 
    function(err,invoicedata) {
        res.json(invoicedata);
    })
})

module.exports = router;