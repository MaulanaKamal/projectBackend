const router = require('express').Router();
const con = require('../app/database');

router.get('/:id?', function(req, res){
    con.query("SELECT ssprd.id,season,kategori,nama,harga,gambar,deskripsi,tglMasukProduct,warna,size,stock FROM season se JOIN kategori ktg on se.id = ktg.season_id join product prd on ktg.id = prd.kategori_id JOIN warnaProduct wrnprd on prd.id = wrnprd.product_id JOIN sizeStockProduct ssprd on wrnprd.id = ssprd.warnaProduct_id where ssprd.id = ?",[req.params.id], function (err, result) {
        res.json(result)
    }); 
})


module.exports = router;