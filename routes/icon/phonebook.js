var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) { //전화번호 아이콘 클릭시 전화번호가 있는 전체 교직원정보를 띄워줌
  var db = req.app.get('db')
  
  let sql = 'SELECT detailOrgan, position, name, telephone FROM employee WHERE NOT NULLIF(telephone,"") IS NULL ORDER BY detailOrgan'

  db.query(sql,(err,rows) =>{
    if(err){
      console.log(err)
      res.sendStatus(400)
    }else{
      res.status(200).json(rows)
    }
  })

      })

    module.exports = router;
