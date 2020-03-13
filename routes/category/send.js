var express = require('express');
var router = express.Router();

router.get('/floorSelect', function(req, res, next) { // 카테고리에서 건물 선택시 해당건물 층 정보 전송
var db = req.app.get('db')
var buildingId = req.query.buildingId

let sql = 'SELECT buildingId, buildingName, floor, isBasement from building WHERE buildingId=?'

      db.query(sql, [buildingId] ,function(err, results) {
        if (err) {
          console.log(err);
          res.sendStatus(400)
        } else {
          res.status(200).json(results)
        }
      });
    
  });

  router.get('/officeSelect', (req,res)=>{ //카테고리에서 층 선택시 해당 층에 위치한 부서 정보를 보내줌
    var db = req.app.get('db')
    var buildingId = req.query.buildingId
    var floorId = req.query.floorId

    let sql = 'SELECT officeId, title, roomId FROM office WHERE buildingId =? AND floorId=? ORDER BY title'

    db.query(sql,[buildingId,floorId],(err,results)=>{
      if(err){
        console.log(err)
        res.sendStatus(400)
      }else{
        res.status(200).json(results)
      }
    })
  })

  // router.get('/elseOffice', (req,res)=>{ //카테고리에서 건물선택시 employee의 officeId가 없는 기타부서들
  //   var db = req.app.get('db')
  //   var buildingId = req.query.buildingId

  //   let sql = 'SELECT o.id, o.title, o.roomId FROM office o LEFT JOIN employee e ON o.id= e.officeId WHERE e.officeId IS NULL AND buildingId=?'

  //   db.query(sql,[buildingId],(err,results)=>{
  //     if(err){
  //       console.log(err)
  //       res.sendStatus(400)
  //     }else{
  //       res.status(200).json(results)
  //     }
  //   })
  // })

  router.get('/elseEmployee', (req,res)=>{ //카테고리에서 건물선택시 officeId가 0인 기타교직원들
    var db = req.app.get('db')
    var buildingName = req.query.buildingName

    let sql = 'SELECT detailOrgan, position, name, telephone, email, mainWork FROM employee WHERE buildingName =? AND officeId=0 ORDER BY position'

    db.query(sql,[buildingName],(err,results)=>{
      if(err){
        console.log(err)
        res.sendStatus(400)
      }else{
        res.status(200).json(results)
      }
    })
  })

  router.get('/employeeSelect', function(req, res, next) { // 카테고리에서 부서 선택시 해당 부서 교직원 정보 보내줌
    var db = req.app.get('db')
    var officeId = req.query.officeId
  
    
    let sql = 'SELECT detailOrgan, position, name, telephone, email, mainWork from employee WHERE officeId=? ORDER BY position'
    
          db.query(sql, [officeId] , function(err, results) {
            if (err) {
              console.log(err);
              res.sendStatus(400)
            } else {
              res.status(200).json(results)
            }
          });
        
      });

module.exports = router;
