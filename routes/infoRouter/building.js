var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');
var pool = mysql.createPool(dbConfig);

/* GET home page. */
router.get('/:id', function(req, res, next) {

  var info = [];
  // console.log("1");
  // console.log(info);

  var buildingId = req.params.id;
  pool.getConnection(async (err, connection) => {
    if (err) console.log(err);
    else {
      await connection.query("SELECT title,lat,log FROM building WHERE id=?", [buildingId], async function(err, results) {
        if (err) {
          console.log(err);
        } else {
          // console.log("2");
          console.log("select building");
          // console.log(results);
          info.push({"buildingInfo":{"id":buildingId,"title":results[0].title,"lat":results[0].lat,"log":results[0].log}});
          // console.log(info);

        }
        connection.destroy();
      })
    }
  });
  // console.log("3");
  // console.log(info);

  pool.getConnection(async (err, connection) => {
    if (err) console.log(err);
    else {
      await connection.query('SELECT id,title,buildingRoomNum,time FROM office WHERE buildingId=? order by buildingRoomNum', [buildingId], async function(err, results) {
        if (err) {
          console.log(err);
        } else {
          // console.log("4");
          console.log("select offices");
          // console.log(results);
          for(var i=0;i<results.length;i++)
            info.push({"offices":{"id":results[i].id,"title":results[i].title,"buildingRoomNum":results[i].buildingRoomNum,"time":results[i].time}});
        }
        connection.destroy();
        // console.log("5");
        // console.log(info);
        res.send(info);
      })
    }
  });
  //
  // var json = {
  //   'buildingInfo': {
  //     "id": req.params.id,
  //     "title": "건물" + req.params.id,
  //     "lat": 37.3774963,
  //     "log": 126.63373060000004
  //   },
  //   'offices': [{
  //       'id': 1,
  //       'title': '부서1',
  //       'buildingNum': 1,
  //       'buildingRoomNum': '101',
  //       'time': '09:00 ~ 17:00'
  //     },
  //     {
  //       'id': 2,
  //       'title': '부서2',
  //       'buildingNum': 1,
  //       'buildingRoomNum': '304',
  //       'time': '09:00 ~ 17:00(점심시간 12:00 ~ 13:00)'
  //     },
  //     {
  //       'id': 3,
  //       'title': '부서3',
  //       'buildingNum': 3,
  //       'buildingRoomNum': '102',
  //       'time': '09:00 ~ 18:00(점심시간 12:00 ~ 13:00)'
  //     },
  //     {
  //       'id': 4,
  //       'title': '부서4',
  //       'buildingNum': 5,
  //       'buildingRoomNum': '102',
  //       'time': '10:00 ~ 20:00'
  //     }
  //   ]
  // }
});

module.exports = router;
