var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');
var pool = mysql.createPool(dbConfig);

/* GET home page. */
router.get('/:theme', function(req, res, next) {

  var theme = req.params.theme;
  var info = [];
  info.push({
    "theme": theme
  });
  pool.getConnection(async (err, connection) => {
    if (err) console.log(err);
    else {
      await connection.query('SELECT id,title,buildingId,buildingRoomNum,time FROM office WHERE filterId=?', [theme], async function(err, results) {
        if (err) {
          console.log(err);
        } else {
          for (var i = 0; i < results.length; i++)
            info.push({
              "offices": {
                "id": results[i].id,
                "title": results[i].title,
                "buildingNum": results[i].buildingId,
                "buildingRoomNum": results[i].buildingRoomNum,
                "time": results[i].time
              }
            });
          console.log(results);
        }
        connection.destroy();
        res.send(info);
      })
    }
  });
  //
  // var json = {
  //   'theme': theme,
  //   'offices': [
  //     {
  //         'id': 1,
  //         'title': '부서1',
  //         'buildingNum': 1,
  //         'buildingRoomNum': '101',
  //         'time': '09:00 ~ 17:00'
  //       },
  //       {
  //         'id': 2,
  //         'title': '부서2',
  //         'buildingNum': 1,
  //         'buildingRoomNum': '304',
  //         'time': '09:00 ~ 17:00(점심시간 12:00 ~ 13:00)'
  //       },
  //       {
  //         'id': 3,
  //         'title': '부서3',
  //         'buildingNum': 3,
  //         'buildingRoomNum': '102',
  //         'time': '09:00 ~ 18:00(점심시간 12:00 ~ 13:00)'
  //       },
  //       {
  //         'id': 4,
  //         'title': '부서4',
  //         'buildingNum': 5,
  //         'buildingRoomNum': '102',
  //         'time': '10:00 ~ 20:00'
  //       }
  //     ]
  //   }
});

module.exports = router;
