var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) { // 전화번호 아이콘창에서 검색바로 교직원이름 또는 전화번호로 정보 검색
var db = req.app.get('db')
var name = req.query.name
var telephone = req.query.telephone

let sqlName = 'SELECT name, detailOrgan, position, telephone FROM employee WHERE name LIKE'+'"%"'+'?'+'"%"'+ 'AND NOT NULLIF(telephone,"") IS NULL' 
let sqlTel = 'SELECT name, detailOrgan, position, telephone FROM employee WHERE telephone LIKE'+'"%"'+'?'+'"%"'+ 'AND NOT NULLIF(telephone,"") IS NULL' 
       if(name){
        db.query(sqlName, [name], function(err, results) {
          if (err) {
            console.log(err);
            res.sendStatus(400)
          } else {
            res.status(200).json(results)
          }
        });
       }else if(telephone){
         db.query(sqlTel,[telephone], function(err,rows){
           if(err){
             console.log(err)
             res.sendStatus(400)
           }else{
             res.status(200).json(rows)
           }
         })
       }
    
  });


module.exports = router;
