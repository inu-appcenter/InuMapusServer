var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) { // 편의시설 아이콘 클릭시 해당 아이콘에 해당하는 건물의 죄표 및 이름 전송
var db = req.app.get('db')
var filterId = req.query.filterId

let sql = 'SELECT title, buildingId, filterId, lat, log  FROM filter WHERE filterId = ?'

db.query(sql,[filterId],(err,rows) =>{
  if(err){
    console.log(err)
    res.sendStatus(400)
  }else{
    res.status(200).json(rows)
  }
})

})

module.exports = router;
