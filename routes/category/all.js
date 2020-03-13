var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) { // 카테고리 처음 진입시 모든 건물의 리스트를 보내줌
var db = req.app.get('db')

let sql = 'SELECT id, buildingId, buildingName from building ORDER BY id'

       db.query(sql,   function(err, results) {
        if (err) {
          console.log(err);
          res.sendStatus(400)
        } else {
          res.status(200).json(results)
        }
      });
    
  });


module.exports = router;
