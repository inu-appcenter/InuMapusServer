var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');
var pool = mysql.createPool(dbConfig);

/* GET home page. */
router.get('/', function(req, res, next) {

  var data=[{
    "theme":0,
    "title":"default"
  },{
    "theme":1,
    "title":"ATM",
    "marker" : "markerAtm.jpg"
  },{
    "theme":2,
    "title":"놀이시설",
    "marker" : "markerPlay.jpg"
  }
  ,{
    "theme":3,
    "title":"여학생휴게실",
    "marker" : "markerWLounge.jpg"
  },{
    "theme":4,
    "title":"남학생휴게실",
    "marker" : "markerMLounge.jpg"
  },{
    "theme":5,
    "title":"카페",
    "marker" : "markerCafe.jpg"
  },{
    "theme":6,
    "title":"식당",
    "marker" : "markerRestaurant.jpg"
  },{
    "theme":7,
    "title":"매점",
    "marker" : "markerConvenience.jpg"
  }];

  for(var i=0;i<data.length;i++)
  {
    var obj = data[i];
    if(obj["marker"])
      console.log("INSERT INTO filter(theme,title,marker) VALUES("+obj["theme"]+", \""+obj["title"]+"\",\""+obj["marker"]+"\");");
    else
      console.log("INSERT INTO filter(theme,title) VALUES("+obj["theme"]+", \""+obj["title"]+"\");");
  }

  res.send("printed");
  // pool.getConnection((err, connection) => {
  //   if (err) console.log(err);
  //   else {
  //     connection.query('SELECT title,buildingNum,buildingRoomNum,time FROM office WHERE id=?', [officeId], function(err, results) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         //info.push({"buildingInfo":{"id":buildingId,"title":,"lat":,"log":}})
  //         console.log(results);
  //       }
  //       connection.destroy();
  //     })
  //   }
  // });
})

module.exports = router;
