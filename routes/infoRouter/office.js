var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');
var pool = mysql.createPool(dbConfig);

/* GET home page. */
router.get('/:id', function(req, res, next) {

  var officeId = req.params.id;
  var info=[];
  pool.getConnection(async(err, connection) => {
    if (err) console.log(err);
    else {
      await connection.query("SELECT title,buildingId,buildingRoomNum,time FROM office WHERE id=?", [officeId], async function(err, results) {
        if (err) {
          console.log(err);
        } else {
          info.push({"officeInfo":{"id":officeId,"title":results[0].title,"buildingNum":results[0].buildingId,"buildingRoomNum":results[0].buildingRoomNum,"time":results[0].time}});
          // console.log(results);
          // console.log(info);
          // res.send(info);
        }
        connection.destroy();
      })
    }
  });

  pool.getConnection(async (err, connection) => {
    if (err) console.log(err);
    else {
      await connection.query('SELECT id,name,position,mainWork,telephone,email FROM employee WHERE officeId=?', [officeId], async function(err, results) {
        if (err) {
          console.log(err);
        } else {
          //info.push({"buildingInfo":{"id":buildingId,"title":,"lat":,"log":}})

          for(var i=0;i<results.length;i++)
            info.push({"employees":{"id":results[i].id,"name":results[i].name,"position":results[i].position,"mainwork":results[i].mainWork,"telephone":results[i].telephone,"email":results[i].email}});
          // console.log(results);
          // console.log(info);
          res.send(info);
        }
        connection.destroy();

      })
    }
  });

  // var json={
  //   'officeInfo': {
  //       'id': req.params.id,
  //       'title': '부서'+req.params.id,
  //       'buildingNum': 1,
  //       'buildingRoomNum': '101',
  //       'time': '09:00 ~ 17:00'
  //     },
  //     'employees' : [{
  //       'id':101,
  //       'name' : '직원명1',
  //       'position' : '직위1',
  //       'mainwork' : '담당업무 1',
  //       'telephone' : '032-835-1111',
  //       'email' : '111@inu.ac.kr'
  //     },
  //     {
  //       'id':102,
  //       'name' : '직원명2',
  //       'position' : '직위2',
  //       'mainwork' : '담당업무 2',
  //       'telephone' : '032-835-2222',
  //       'email' : '222@inu.ac.kr'
  //     }]
  // }
})

module.exports = router;
