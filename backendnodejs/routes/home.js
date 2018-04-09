const router = require('express').Router();
const con = require('../app/database');

router.get('/', function(req, res){
    var sql = 'SELECT * from season';
    con.query(sql, function (err, season) {
        res.send(JSON.stringify(season));
    });
})


module.exports = router;