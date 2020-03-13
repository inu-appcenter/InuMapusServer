var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) { //'전체' 아이콘 선택시 모든 건물정보 보내줌
var db = req.app.get('db')

let sqlBuilding = 'SELECT buildingId, buildingName, lat, log FROM building'
let sqlOffice = 'SELECT buildingId, title FROM office WHERE isMain=1'

      db.query(sqlBuilding, function(err, results) {
        if (err) {
          console.log(err);
          res.sendStatus(400)
        } else {
          db.query(sqlOffice, (err,rows)=>{
            if(err){
              console.log(err)
              res.sendStatus(400)
            }else{
              res.status(200).json({building:results,office:rows})
            }
          })
          
        }
      });
    
  });


module.exports = router;
