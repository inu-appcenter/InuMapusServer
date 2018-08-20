var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');
var pool = mysql.createPool(dbConfig);

/* GET home page. */
router.get('/', function(req, res, next) {

  var info=[];

  // var json = {
  //   'buildings':
  //   [{
  //     "id": 1,
  //     "title": "대학본부",
  //     "lat": "37.3767741",
  //     "log": "126.63464720000002"
  //   },{
  //     "id": 2,
  //     "title": "교수회관",
  //     "lat": 37.3774963,
  //     "log": 126.63373060000004
  //   }, {
  //     "id": 3,
  //     "title": "홍보관",
  //     "lat": 37.377315,
  //     "log": 126.633953
  //   }, {
  //     "id": 4,
  //     "title": "정보전산원/정보기술교육원",
  //     "lat": 37.376385,
  //     "log": 126.635552
  //   }, {
  //     "id": 5,
  //     "title": "자연과학대학",
  //     "lat": 37.375619,
  //     "log": 126.634624
  //   }, {
  //     "id": 6,
  //     "title": "학산도서관",
  //     "lat": 37.375073,
  //     "log": 126.634124
  //   }, {
  //     "id": 7,
  //     "title": "정보기술대학",
  //     "lat": 37.374438,
  //     "log": 126.63362
  //   }, {
  //     "id": 8,
  //     "title": "공과대학",
  //     "lat": 37.373534,
  //     "log": 126.632783
  //   }, {
  //     "id": 9,
  //     "title": "공동실험실습관",
  //     "lat": 37.372711,
  //     "log": 126.633435
  //   }, {
  //     "id": 10,
  //     "title": "게스트하우스",
  //     "lat": 37.372813,
  //     "log": 126.631783
  //   }, {
  //     "id": 11,
  //     "title": "복지회관",
  //     "lat": 37.37436,
  //     "log": 126.631794
  //   }, {
  //     "id": 12,
  //     "title": "컨벤션센터",
  //     "lat": 37.375213,
  //     "log": 126.632529
  //   }, {
  //     "id": 13,
  //     "title": "사회과학대학/법과대학",
  //     "lat": 37.375997,
  //     "log": 126.633237
  //   }, {
  //     "id": 14,
  //     "title": "동북아경제통상대학/경영대학/물류대학원",
  //     "lat": 37.376526,
  //     "log": 126.632883
  //   }, {
  //     "id": 15,
  //     "title": "인문대학/어학원",
  //     "lat": 37.375656,
  //     "log": 126.631982
  //   }, {
  //     "id": 16,
  //     "title": "예체능대학",
  //     "lat": 37.374761,
  //     "log": 126.631285
  //   }, {
  //     "id": 17,
  //     "title": "학생회관",
  //     "lat": 37.374173,
  //     "log": 126.630695
  //   }, {
  //     "id": 18,
  //     "title": "기숙사",
  //     "lat": 37.37384,
  //     "log": 126.629869
  //   }, {
  //     "id": 19,
  //     "title": "국제교류관",
  //     "lat": 37.374548,
  //     "log": 126.630234
  //   }, {
  //     "id": 20,
  //     "title": "스포츠센터",
  //     "lat": 37.374991,
  //     "log": 126.629655
  //   }, {
  //     "id": 21,
  //     "title": "체육관",
  //     "lat": 37.375485,
  //     "log": 126.630234
  //   }, {
  //     "id": 22,
  //     "title": "학군단",
  //     "lat": 37.375894,
  //     "log": 126.63076
  //   }, {
  //     "id": 23,
  //     "title": "공연장",
  //     "lat": 37.377863,
  //     "log": 126.632444
  //   }, {
  //     "id": 24,
  //     "title": "전망타워",
  //     "lat": 37.375919,
  //     "log": 126.635716
  //   }, {
  //     "id": 25,
  //     "title": "어린이집",
  //     "lat": 37.375271,
  //     "log": 126.636049
  //   }, {
  //     "id": 26,
  //     "title": "온실",
  //     "lat": 37.375194,
  //     "log": 126.635566
  //   }, {
  //     "id": 27,
  //     "title": "제2공동실험실습관",
  //     "lat": 37.371946,
  //     "log": 126.633356
  //   }, {
  //     "id": 28,
  //     "title": "도시과학대학",
  //     "lat": 37.371801,
  //     "log": 126.633023
  //   }, {
  //     "id": 29,
  //     "title": "생명공학부",
  //     "lat": 37.372586,
  //     "log": 126.631327
  //   }]
  // }

  pool.getConnection(async (err, connection) => {
    if (err) console.log(err);
    else {
      await connection.query("SELECT id,title,lat,log FROM building", async function(err, results) {
        if (err) {
          console.log(err);
        } else {
          console.log("select building list");
          for(var i=0;i<results.length;i++)
            info.push({"buildings":{"id":results[i].id,"title":results[i].title,"lat":results[i].lat,"log":results[i].log}});
          // console.log(info);
        }
        connection.destroy();
        res.send(info);
      })
    }
  });
});
module.exports = router;
