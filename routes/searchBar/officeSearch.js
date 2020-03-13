var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) { // 카테고리 내부에서 부서 검색하는 검색바
var db = req.app.get('db')
var buildingId = req.query.buildingId
var floorId = req.query.floorId
var title = req.query.title

let sql = 'SELECT title, id, roomId FROM office WHERE buildingId=? AND floorId=? AND title LIKE'+'"%"'+'?'+'"%"'
       db.query(sql, [buildingId,floorId,title],  function(err, results) {
        if (err) {
          console.log(err);
          res.sendStatus(400)
        } else {
          res.status(200).json(results)
        }
      });
    
  });


module.exports = router;
