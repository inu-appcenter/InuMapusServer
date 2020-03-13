var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) { //'전체' 아이콘 선택시 모든 건물정보 및 해당 건물에 띄워줄 office정보 보내줌
var db = req.app.get('db')

let sql = 'SELECT b.buildingId, b.title AS buildingName, b.lat, b.log, o.title AS office FROM building b LEFT JOIN office o ON (b.buildingId = o.buildingId AND o.isMain = 1)'

      db.query(sql,   function(err, results) {
        if (err) {
          console.log(err);
          res.sendStatus(400)
        } else {
          console.log('Success sending building info')
          res.status(200).json(results)
        }
      });
    
  });


module.exports = router;
