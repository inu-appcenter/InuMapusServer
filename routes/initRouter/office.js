var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../config/dbConfig');
var pool = mysql.createPool(dbConfig);

var HTMLParser = require('node-html-parser');



// const request = require('request')
// const cheerio = require('cheerio')
// var removeNewline = require('newline-remove')

/* GET home page. */
router.get('/', function(req, res, next) {

      var data = [{
        "buildingId": 1,
        "office": [{
          "buildingRoomNum": "B101",
          "title": "종합상황실"
        }, {
          "buildingRoomNum": "B103",
          "title": "MRO창고"
        }, {
          "buildingRoomNum": "B104",
          "title": "종합문서고"
        }, {
          "buildingRoomNum": "B104A",
          "title": "MRO창고"
        }, {
          "buildingRoomNum": "101",
          "title": "입학관리과"
        }, {
          "buildingRoomNum": "101A",
          "title": "창고"
        }, {
          "buildingRoomNum": "102",
          "title": "상담실"
        }, {
          "buildingRoomNum": "103",
          "title": "당직실"
        }, {
          "buildingRoomNum": "104",
          "title": "교육지원팀"
        }, {
          "buildingRoomNum": "105",
          "title": "창고"
        }, {
          "buildingRoomNum": "107",
          "title": "국제지원팀"
        }, {
          "buildingRoomNum": "201",
          "title": "시설과"
        }, {
          "buildingRoomNum": "202",
          "title": "Happycoll Center"
        }, {
          "buildingRoomNum": "204",
          "title": "회의실"
        }, {
          "buildingRoomNum": "205",
          "title": "회의실"
        }, {
          "buildingRoomNum": "209",
          "title": "접견실"
        }, {
          "buildingRoomNum": "211",
          "title": "상설감사장"
        }, {
          "buildingRoomNum": "213",
          "title": "감사팀"
        }, {
          "buildingRoomNum": "214",
          "title": "교무과"
        }, {
          "buildingRoomNum": "301",
          "title": "총무과"
        }, {
          "buildingRoomNum": "302",
          "title": "재무회계팀"
        }, {
          "buildingRoomNum": "306",
          "title": "모유수유실"
        }, {
          "buildingRoomNum": "307",
          "title": "회의실"
        }, {
          "buildingRoomNum": "308",
          "title": "대외전략과"
        }, {
          "buildingRoomNum": "311",
          "title": "전략평가팀"
        }, {
          "buildingRoomNum": "312",
          "title": "기획예산과"
        }, {
          "buildingRoomNum": "312A",
          "title": "발전기금사무실"
        }, {
          "buildingRoomNum": "313",
          "title": "브리핑룸"
        }, {
          "buildingRoomNum": "401",
          "title": "통합처장실"
        }, {
          "buildingRoomNum": "404",
          "title": "비서실"
        }, {
          "buildingRoomNum": "405",
          "title": "비서실"
        }, {
          "buildingRoomNum": "408",
          "title": "홍보팀"
        }, {
          "buildingRoomNum": "409",
          "title": "창고"
        }, {
          "buildingRoomNum": "411",
          "title": "연구지원팀"
        }, {
          "buildingRoomNum": "412",
          "title": "연구혁신팀"
        }, {
          "buildingRoomNum": "413",
          "title": "인력개발팀"
        }, {
          "buildingRoomNum": "501",
          "title": "비서실"
        }, {
          "buildingRoomNum": "502",
          "title": "접견실 및 회의실"
        }, {
          "buildingRoomNum": "503",
          "title": "교학부총장실"
        }, {
          "buildingRoomNum": "504",
          "title": "대외협력부총장실"
        }, {
          "buildingRoomNum": "504A",
          "title": "휴게실"
        }, {
          "buildingRoomNum": "505",
          "title": "회의실"
        }, {
          "buildingRoomNum": "506",
          "title": "총장실"
        }, {
          "buildingRoomNum": "507",
          "title": "영상회의실"
        }, {
          "buildingRoomNum": "508",
          "title": "평의원회의장실"
        }, {
          "buildingRoomNum": "509",
          "title": "상임감사실"
        }, {
          "buildingRoomNum": "510",
          "title": "법인지원팀"
        }, {
          "buildingRoomNum": "513",
          "title": "법인지원팀"
        }, {
          "buildingRoomNum": "514",
          "title": "이사장실"
        }]
      }, {
        "buildingId": 2,
        "office": [{
          "buildingRoomNum": "101",
          "title": "교수협의회실"
        }, {
          "buildingRoomNum": "108",
          "title": "경비실"
        }, {
          "buildingRoomNum": "201",
          "title": "교직원식당"
        }, {
          "buildingRoomNum": "202",
          "title": "주방"
        }, {
          "buildingRoomNum": "203",
          "title": "창고-1"
        }, {
          "buildingRoomNum": "204",
          "title": "종업원휴게실"
        }, {
          "buildingRoomNum": "205",
          "title": "사무실"
        }, {
          "buildingRoomNum": "208",
          "title": "학장실"
        }, {
          "buildingRoomNum": "209",
          "title": "IPP사업단"
        }, {
          "buildingRoomNum": "210",
          "title": "IPP사업단"
        }, {
          "buildingRoomNum": "211",
          "title": "강의실"
        }, {
          "buildingRoomNum": "212",
          "title": "강의실"
        }, {
          "buildingRoomNum": "213",
          "title": "강의실"
        }, {
          "buildingRoomNum": "214",
          "title": "행정부속실"
        }, {
          "buildingRoomNum": "301",
          "title": "레스토랑"
        }, {
          "buildingRoomNum": "302",
          "title": "주방"
        }, {
          "buildingRoomNum": "303",
          "title": "주방창고"
        }]
      }, {
        "buildingId": 3,
        "office": [{
          "buildingRoomNum": "101",
          "title": "홍보관"
        }, {
          "buildingRoomNum": "201",
          "title": "홍보"
        }]
      }, {
        "buildingId": 4,
        "office": [{
          "buildingRoomNum": "101",
          "title": "전산실습실-3"
        }, {
          "buildingRoomNum": "102",
          "title": "전산실습실-4"
        }, {
          "buildingRoomNum": "103",
          "title": "자율프린트실"
        }, {
          "buildingRoomNum": "104",
          "title": "전산실습실-1"
        }, {
          "buildingRoomNum": "105",
          "title": "전산실습실-2"
        }, {
          "buildingRoomNum": "106",
          "title": "실습실-1"
        }, {
          "buildingRoomNum": "107",
          "title": "사무실"
        }, {
          "buildingRoomNum": "108",
          "title": "원장실"
        }, {
          "buildingRoomNum": "109",
          "title": "실습실-2"
        }, {
          "buildingRoomNum": "201",
          "title": "초빙교수실"
        }, {
          "buildingRoomNum": "202",
          "title": "입시지원실"
        }, {
          "buildingRoomNum": "203",
          "title": "개발실"
        }, {
          "buildingRoomNum": "204",
          "title": "시스템운영실"
        }, {
          "buildingRoomNum": "205",
          "title": "자료실"
        }, {
          "buildingRoomNum": "206",
          "title": "원장실"
        }, {
          "buildingRoomNum": "208",
          "title": "행정실"
        }, {
          "buildingRoomNum": "209",
          "title": "관제실"
        }, {
          "buildingRoomNum": "210",
          "title": "강사대기실"
        }, {
          "buildingRoomNum": "303",
          "title": "정보기획/운영팀"
        }, {
          "buildingRoomNum": "304",
          "title": "항온항습실-1"
        }, {
          "buildingRoomNum": "305",
          "title": "창고-1"
        }, {
          "buildingRoomNum": "306",
          "title": "항온항습실-2"
        }, {
          "buildingRoomNum": "307",
          "title": "정보시스템실"
        }, {
          "buildingRoomNum": "308",
          "title": "UPS실"
        }]
      }, {
        "buildingId": 5,
        "office": [{
          "buildingRoomNum": "B112",
          "title": "감염성폐기물창고"
        }, {
          "buildingRoomNum": "B113",
          "title": "원액및동위원소보관소"
        }, {
          "buildingRoomNum": "101",
          "title": "멀티미디어준비실"
        }, {
          "buildingRoomNum": "102",
          "title": "통계처리실"
        }, {
          "buildingRoomNum": "103",
          "title": "수학과시청각실"
        }, {
          "buildingRoomNum": "104",
          "title": "응용수학실습실"
        }, {
          "buildingRoomNum": "105",
          "title": "수치해석및과학계산실습실"
        }, {
          "buildingRoomNum": "106",
          "title": "해석학연습실"
        }, {
          "buildingRoomNum": "107",
          "title": "대학수학연습실"
        }, {
          "buildingRoomNum": "108",
          "title": "대수학연습실"
        }, {
          "buildingRoomNum": "109",
          "title": "일반물리실험실"
        }, {
          "buildingRoomNum": "110",
          "title": "물리실험준비실 및 PC실습준비실"
        }, {
          "buildingRoomNum": "111",
          "title": "물리공작실"
        }, {
          "buildingRoomNum": "112",
          "title": "공대물리실험실-1"
        }, {
          "buildingRoomNum": "113",
          "title": "시청각자료제작실 및 동역학실험실"
        }, {
          "buildingRoomNum": "114",
          "title": "공대물리실험실-2"
        }, {
          "buildingRoomNum": "115",
          "title": "물리실험실"
        }, {
          "buildingRoomNum": "116",
          "title": "물리학과 시약보관실"
        }, {
          "buildingRoomNum": "117",
          "title": "전산실 및 전산물리실험실(물리학과 전산실)"
        }, {
          "buildingRoomNum": "118",
          "title": "역학실험실"
        }, {
          "buildingRoomNum": "120",
          "title": "무척주동물사육실"
        }, {
          "buildingRoomNum": "120-1",
          "title": "곰팡이네트워크실험실"
        }, {
          "buildingRoomNum": "121",
          "title": "단과대학생회실"
        }, {
          "buildingRoomNum": "122",
          "title": "남자탈의실"
        }, {
          "buildingRoomNum": "123",
          "title": "남자샤워실"
        }, {
          "buildingRoomNum": "124",
          "title": "여자샤워실"
        }, {
          "buildingRoomNum": "125",
          "title": "여자탈의실"
        }, {
          "buildingRoomNum": "126",
          "title": "여자휴게실"
        }, {
          "buildingRoomNum": "127",
          "title": "매점",
          "filter" : 7
        }, {
          "buildingRoomNum": "130",
          "title": "포썸",
          "filter" : 6
        }, {
          "buildingRoomNum": "201",
          "title": "곤충표본실"
        }, {
          "buildingRoomNum": "202",
          "title": "곤충학실험실"
        }, {
          "buildingRoomNum": "203",
          "title": "생리학,미생물학실험실"
        }, {
          "buildingRoomNum": "204",
          "title": "일반생물학,분류학실험실"
        }, {
          "buildingRoomNum": "205",
          "title": "유전학실험실"
        }, {
          "buildingRoomNum": "206",
          "title": "전산실(컴퓨터실)"
        }, {
          "buildingRoomNum": "207",
          "title": "실험준비실"
        }, {
          "buildingRoomNum": "208",
          "title": "생명과학부사무실"
        }, {
          "buildingRoomNum": "209",
          "title": "과세미나실"
        }, {
          "buildingRoomNum": "210",
          "title": "학과사무실"
        }, {
          "buildingRoomNum": "211",
          "title": "교육조교실"
        }, {
          "buildingRoomNum": "212",
          "title": "대학원실"
        }, {
          "buildingRoomNum": "213",
          "title": "물리학과 대학원실"
        }, {
          "buildingRoomNum": "214",
          "title": "물리학과사무실"
        }, {
          "buildingRoomNum": "215",
          "title": "물리학과사무실"
        }, {
          "buildingRoomNum": "216",
          "title": "고체물리실험실"
        }, {
          "buildingRoomNum": "217",
          "title": "박막연구실"
        }, {
          "buildingRoomNum": "218",
          "title": "전자구조연구실"
        }, {
          "buildingRoomNum": "219",
          "title": "나노광전자소자제작실"
        }, {
          "buildingRoomNum": "220",
          "title": "나노광전자소자연구실"
        }, {
          "buildingRoomNum": "221",
          "title": "플라즈마연구실"
        }, {
          "buildingRoomNum": "222",
          "title": "핵융합연구실"
        }, {
          "buildingRoomNum": "223",
          "title": "레이져응용연구실"
        }, {
          "buildingRoomNum": "224",
          "title": "완전암실"
        }, {
          "buildingRoomNum": "225",
          "title": "나노-초고속현상연구실"
        }, {
          "buildingRoomNum": "226",
          "title": "첨단 물질 분광 연구실"
        }, {
          "buildingRoomNum": "227",
          "title": "나노전자연구실"
        }, {
          "buildingRoomNum": "228",
          "title": "집적스시템연구실"
        }, {
          "buildingRoomNum": "229",
          "title": "강사대기실"
        }, {
          "buildingRoomNum": "230",
          "title": "기초과학연구소"
        }, {
          "buildingRoomNum": "231",
          "title": "학장실"
        }, {
          "buildingRoomNum": "232",
          "title": "교수회의실"
        }, {
          "buildingRoomNum": "233",
          "title": "교학실"
        }, {
          "buildingRoomNum": "234",
          "title": "세미나실(소)-1"
        }, {
          "buildingRoomNum": "235",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "236",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "237",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "238",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "239",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "241",
          "title": "에저니저장물질 전하수송연구실"
        }, {
          "buildingRoomNum": "242",
          "title": "저차원 다기능 물질 물성 연구실"
        }, {
          "buildingRoomNum": "243",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "244",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "245",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "246",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "247",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "248",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "249",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "250",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "251",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "252",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "253",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "254",
          "title": "암호 및 정보보호실"
        }, {
          "buildingRoomNum": "255",
          "title": "수학과정보처리실"
        }, {
          "buildingRoomNum": "256",
          "title": "교양수학사무실"
        }, {
          "buildingRoomNum": "301",
          "title": "공동기기실"
        }, {
          "buildingRoomNum": "302",
          "title": "신경대사학 실험실"
        }, {
          "buildingRoomNum": "303",
          "title": "분자세포생물학실험실"
        }, {
          "buildingRoomNum": "305",
          "title": "식물 대사 실험실"
        }, {
          "buildingRoomNum": "306",
          "title": "살균초자세척실"
        }, {
          "buildingRoomNum": "307",
          "title": "학과학생회실"
        }, {
          "buildingRoomNum": "308",
          "title": "강의실(소)-1"
        }, {
          "buildingRoomNum": "309",
          "title": "강의실(중)-1"
        }, {
          "buildingRoomNum": "310",
          "title": "식물분자유전학실험실"
        }, {
          "buildingRoomNum": "311",
          "title": "식물조직배양실"
        }, {
          "buildingRoomNum": "312",
          "title": "분자세포독성학실험실"
        }, {
          "buildingRoomNum": "313",
          "title": "세포배양실"
        }, {
          "buildingRoomNum": "314",
          "title": "바이러스학실험실"
        }, {
          "buildingRoomNum": "315",
          "title": "동물분류학실험실"
        }, {
          "buildingRoomNum": "316",
          "title": "현미경실"
        }, {
          "buildingRoomNum": "317",
          "title": "한국문화컨텐츠실"
        }, {
          "buildingRoomNum": "318",
          "title": "섬유고분자분석실"
        }, {
          "buildingRoomNum": "319",
          "title": "세미나실(소)-2"
        }, {
          "buildingRoomNum": "320",
          "title": "학과사무실"
        }, {
          "buildingRoomNum": "321",
          "title": "패션디자인실"
        }, {
          "buildingRoomNum": "322",
          "title": "특수의상실"
        }, {
          "buildingRoomNum": "323",
          "title": "섬유화학실험실"
        }, {
          "buildingRoomNum": "324",
          "title": "섬유물리실험실"
        }, {
          "buildingRoomNum": "325",
          "title": "강의실(중)-2"
        }, {
          "buildingRoomNum": "326",
          "title": "강의실(소)-2"
        }, {
          "buildingRoomNum": "327",
          "title": "학과학생회실"
        }, {
          "buildingRoomNum": "328",
          "title": "평면구성실"
        }, {
          "buildingRoomNum": "329",
          "title": "입체구성실"
        }, {
          "buildingRoomNum": "330",
          "title": "감성공학연구실"
        }, {
          "buildingRoomNum": "331",
          "title": "패션마케팅연구실"
        }, {
          "buildingRoomNum": "332",
          "title": "패션정보실"
        }, {
          "buildingRoomNum": "333",
          "title": "패션디자인연구실"
        }, {
          "buildingRoomNum": "334",
          "title": "연구기열람실획팀"
        }, {
          "buildingRoomNum": "335",
          "title": "강의실-대(계단식)"
        }, {
          "buildingRoomNum": "336",
          "title": "세미나실"
        }, {
          "buildingRoomNum": "336A",
          "title": "준비실"
        }, {
          "buildingRoomNum": "337",
          "title": "세미나실(소)-3"
        }, {
          "buildingRoomNum": "338",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "339",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "340",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "341",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "342",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "344",
          "title": "디자인캐드실"
        }, {
          "buildingRoomNum": "345",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "346",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "347",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "348",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "349",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "350",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "351",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "352",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "353",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "354",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "355",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "356",
          "title": "수서독성생리생태학실험실"
        }, {
          "buildingRoomNum": "357",
          "title": "해조류배양실"
        }, {
          "buildingRoomNum": "401",
          "title": "전기화학연구실"
        }, {
          "buildingRoomNum": "402",
          "title": "나노재료과학연구실"
        }, {
          "buildingRoomNum": "402A",
          "title": "나노재료과학연구실"
        }, {
          "buildingRoomNum": "403",
          "title": "유기합성실험실"
        }, {
          "buildingRoomNum": "404",
          "title": "학부학생회실"
        }, {
          "buildingRoomNum": "405",
          "title": "강의실(소)-3"
        }, {
          "buildingRoomNum": "406",
          "title": "강의실(중)-3"
        }, {
          "buildingRoomNum": "407",
          "title": "이론화학실"
        }, {
          "buildingRoomNum": "408",
          "title": "생화학실험실"
        }, {
          "buildingRoomNum": "409",
          "title": "무기고체화학실험실"
        }, {
          "buildingRoomNum": "411",
          "title": "화학과사무실"
        }, {
          "buildingRoomNum": "412",
          "title": "분자분광학연구실"
        }, {
          "buildingRoomNum": "413",
          "title": "단일분자분광학연구실"
        }, {
          "buildingRoomNum": "414",
          "title": "세미나실"
        }, {
          "buildingRoomNum": "415",
          "title": "학과사무실"
        }, {
          "buildingRoomNum": "416",
          "title": "대학원실"
        }, {
          "buildingRoomNum": "417",
          "title": "세미나실"
        }, {
          "buildingRoomNum": "418",
          "title": "소비자정보분석실"
        }, {
          "buildingRoomNum": "419",
          "title": "소비자상담실"
        }, {
          "buildingRoomNum": "420",
          "title": "강의실(중)-4"
        }, {
          "buildingRoomNum": "421",
          "title": "강의실(소)-4"
        }, {
          "buildingRoomNum": "422",
          "title": "학과학생회실"
        }, {
          "buildingRoomNum": "423",
          "title": "아동상담실"
        }, {
          "buildingRoomNum": "424",
          "title": "아동행동분석실"
        }, {
          "buildingRoomNum": "425",
          "title": "주거환경및계획실습실"
        }, {
          "buildingRoomNum": "426",
          "title": "아동발달검사실"
        }, {
          "buildingRoomNum": "427",
          "title": "소비자행동연구실"
        }, {
          "buildingRoomNum": "428",
          "title": "주거환경연구실"
        }, {
          "buildingRoomNum": "429",
          "title": "영재아동상담실"
        }, {
          "buildingRoomNum": "430A",
          "title": "초등심화과학A반"
        }, {
          "buildingRoomNum": "430B",
          "title": "초등심화과학B반"
        }, {
          "buildingRoomNum": "431",
          "title": "서버실"
        }, {
          "buildingRoomNum": "432",
          "title": "사무실"
        }, {
          "buildingRoomNum": "433",
          "title": "세미나실-5"
        }, {
          "buildingRoomNum": "434",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "435",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "436",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "437",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "438",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "440",
          "title": "놀이치료준비실"
        }, {
          "buildingRoomNum": "441",
          "title": "놀이치료연구실"
        }, {
          "buildingRoomNum": "442",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "443",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "444",
          "title": "화학과대학원실"
        }, {
          "buildingRoomNum": "445",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "446",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "447",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "448",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "449",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "450",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "451",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "452",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "453",
          "title": "반응속도연구실"
        }, {
          "buildingRoomNum": "454",
          "title": "기기보관실"
        }, {
          "buildingRoomNum": "501",
          "title": "해양자료 분석기기실"
        }, {
          "buildingRoomNum": "502",
          "title": "공동기기실험실2"
        }, {
          "buildingRoomNum": "503",
          "title": "공동기기실험실1"
        }, {
          "buildingRoomNum": "504",
          "title": "일반화학실험"
        }, {
          "buildingRoomNum": "505",
          "title": "학과학생회실"
        }, {
          "buildingRoomNum": "506",
          "title": "강의실(소)-5"
        }, {
          "buildingRoomNum": "507A",
          "title": "강의실(중)-5"
        }, {
          "buildingRoomNum": "508",
          "title": "합성실험실"
        }, {
          "buildingRoomNum": "509",
          "title": "약품보관실"
        }, {
          "buildingRoomNum": "510",
          "title": "물리화학실험실"
        }, {
          "buildingRoomNum": "511",
          "title": "전산화학실험실"
        }, {
          "buildingRoomNum": "512",
          "title": "해양환경화학실험실"
        }, {
          "buildingRoomNum": "513",
          "title": "전공사무실"
        }, {
          "buildingRoomNum": "514",
          "title": "자료실"
        }, {
          "buildingRoomNum": "515",
          "title": "세미나 및 자료실"
        }, {
          "buildingRoomNum": "516",
          "title": "과학영재교육연구소"
        }, {
          "buildingRoomNum": "517",
          "title": "세미나실(소)06"
        }, {
          "buildingRoomNum": "518",
          "title": "물리학과 공동실험실-방사능측정실"
        }, {
          "buildingRoomNum": "519",
          "title": "인천지방방사능측정소/환경시료채취실"
        }, {
          "buildingRoomNum": "520",
          "title": "광학실험실"
        }, {
          "buildingRoomNum": "521",
          "title": "암실"
        }, {
          "buildingRoomNum": "522",
          "title": "전자기학 및 전자물리실험실"
        }, {
          "buildingRoomNum": "523",
          "title": "현대물리실험실"
        }, {
          "buildingRoomNum": "524",
          "title": "강의실(중)"
        }, {
          "buildingRoomNum": "525",
          "title": "강의실(소)-6"
        }, {
          "buildingRoomNum": "526",
          "title": "학과학생회실"
        }, {
          "buildingRoomNum": "527",
          "title": "강의실"
        }, {
          "buildingRoomNum": "528",
          "title": "해양생지화학실험실"
        }, {
          "buildingRoomNum": "529",
          "title": "행동생태실험실"
        }, {
          "buildingRoomNum": "530",
          "title": "해양과학실험실"
        }, {
          "buildingRoomNum": "534",
          "title": "생명과학기술대학 교학실"
        }, {
          "buildingRoomNum": "535",
          "title": "학장실"
        }, {
          "buildingRoomNum": "536",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "537",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "538",
          "title": "초빙교수실"
        }, {
          "buildingRoomNum": "539",
          "title": "초빙교수실"
        }, {
          "buildingRoomNum": "540",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "541",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "542",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "543",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "544",
          "title": "교수연구실"
        }, {
          "buildingRoomNum": "545",
          "title": "학과학생회실"
        }, {
          "buildingRoomNum": "546",
          "title": "해양학과사무실"
        }, {
          "buildingRoomNum": "547",
          "title": "분자설계합성실험실"
        }, {
          "buildingRoomNum": "547-1",
          "title": "연구용실험실"
        }, {
          "buildingRoomNum": "548",
          "title": "신약개발연구소"
        }]
      }, {
        "buildingId": 6,
        "office": [{
          "buildingRoomNum": "B103",
          "title" : "자유열람실-1"
        }, {
          "buildingRoomNum": "B104",
          "title": "자유열람실-1A"
        }, {
          "buildingRoomNum": "B105",
          "title": "자료보존서고"
        }, {
          "buildingRoomNum": "B107",
          "title": "창고-1"
        }, {
          "buildingRoomNum": "B108",
          "title": "중앙창고"
        }, {
          "buildingRoomNum": "B109",
          "title": "서고"
        }, {
          "buildingRoomNum": "B110",
          "title": "학술정보지원팀"
        }, {
          "buildingRoomNum": "B111",
          "title": "집서실-2"
        }, {
          "buildingRoomNum": "B112",
          "title": "집서실-1"
        }, {
          "buildingRoomNum": "B113",
          "title": "경비실"
        }, {
          "buildingRoomNum": "B114",
          "title": "집중구내통신실"
        }, {
          "buildingRoomNum": "B115",
          "title": "직원회의실"
        }, {
          "buildingRoomNum": "B116",
          "title": "복사제본실"
        }, {
          "buildingRoomNum": "B118",
          "title": "자유열람실-2"
        }, {
          "buildingRoomNum": "B119",
          "title": "강사대기실"
        }, {
          "buildingRoomNum": "B120",
          "title": "준비실"
        }, {
          "buildingRoomNum": "B121",
          "title": "세미나실"
        }, {
          "buildingRoomNum": "B122",
          "title": "자유열람실-3A"
        }, {
          "buildingRoomNum": "B123",
          "title": "자유열람실-3"
        }, {
          "buildingRoomNum": "B124",
          "title": "매점 및 학생휴게실"
        }, {
          "buildingRoomNum": "B125",
          "title": "락카룸-1"
        }, {
          "buildingRoomNum": "B126",
          "title": "락카룸-2"
        }, {
          "buildingRoomNum": "103",
          "title": "도서관 관장실"
        }, {
          "buildingRoomNum": "104",
          "title": "카페테리아"
        }, {
          "buildingRoomNum": "105",
          "title": "경비실-2"
        }, {
          "buildingRoomNum": "106",
          "title": "전자정보운용실"
        }, {
          "buildingRoomNum": "107",
          "title": "전자정보기계실"
        }, {
          "buildingRoomNum": "109",
          "title": "자료보존실"
        }, {
          "buildingRoomNum": "110",
          "title": "열람업무지원실"
        }, {
          "buildingRoomNum": "111",
          "title": "멀티미디어실"
        }, {
          "buildingRoomNum": "112",
          "title": "경비실-1"
        }, {
          "buildingRoomNum": "113",
          "title": "멀티미디어Lab"
        }, {
          "buildingRoomNum": "202",
          "title": "연속간행물실"
        }, {
          "buildingRoomNum": "204",
          "title": "열람업무지원실"
        }, {
          "buildingRoomNum": "205",
          "title": "스터디룸-1"
        }, {
          "buildingRoomNum": "206",
          "title": "스터디룸-2"
        }, {
          "buildingRoomNum": "207",
          "title": "스터디룸-3"
        }, {
          "buildingRoomNum": "208",
          "title": "스터디룸-4"
        }, {
          "buildingRoomNum": "209",
          "title": "스터디룸-5"
        }, {
          "buildingRoomNum": "302",
          "title": "제1자료실"
        }, {
          "buildingRoomNum": "304",
          "title": "열람업무지원실"
        }, {
          "buildingRoomNum": "305",
          "title": "그룹스터디룸(중)-1"
        }, {
          "buildingRoomNum": "306",
          "title": "그룹스터디룸(중)-2"
        }, {
          "buildingRoomNum": "307",
          "title": "그룹스터디룸(중)-3"
        }, {
          "buildingRoomNum": "308",
          "title": "그룹스터디룸(소)-1"
        }, {
          "buildingRoomNum": "309",
          "title": "그룹스터디룸(소)-2"
        }, {
          "buildingRoomNum": "402",
          "title": "제2자료실"
        }, {
          "buildingRoomNum": "403",
          "title": "열람업무지원실"
        }]
      }, {
        "buildingId": 7,
        "office": [{
          "buildingRoomNum": "101",
          "title": "디지털실험실"
        }, {
          "buildingRoomNum": "102",
          "title": "기초정보공학실험실"
        }, {
          "buildingRoomNum": "103",
          "title": "단과대학생회실"
        }, {
          "buildingRoomNum": "104",
          "title": "강의실(중)-1"
        }, {
          "buildingRoomNum": "105",
          "title": "정보시스템실험실"
        }, {
          "buildingRoomNum": "106",
          "title": "PC검색실"
        }, {
          "buildingRoomNum": "107",
          "title": "정보통신실험실"
        }, {
          "buildingRoomNum": "108",
          "title": "학과학생회실"
        }, {
          "buildingRoomNum": "109",
          "title": "경비실"
        }, {
          "buildingRoomNum": "110",
          "title": "집중구내통신실"
        }, {
          "buildingRoomNum": "111",
          "title": "컴퓨터실험실-1"
        }, {
          "buildingRoomNum": "112",
          "title": "여학생휴게실"
        }, {
          "buildingRoomNum": "113",
          "title": "샤워실(여)"
        }, {
          "buildingRoomNum": "114",
          "title": "탈의실(여)"
        }, {
          "buildingRoomNum": "115",
          "title": "샤워실(남)"
        }, {
          "buildingRoomNum": "116",
          "title": "탈의실(남)"
        }]
      // }, {
      //   "buildingId": 8,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":9 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":10 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":11 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":12 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":13 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":14 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":15 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":16 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":17 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":18 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":19 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":20 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":21 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":22 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":23 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":24 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":25 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":26 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":27 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":28 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      // }, {
      //   "buildingId":29 ,
      //   "office": [{
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }, {
      //     "buildingRoomNum": "",
      //     "title": ""
      //   }]
      }]

      for(var i=0;i<data.length;i++)
      {
        var obj = data[i];
        var buildingId = obj["buildingId"];
        for(var j=0;j<obj["office"].length;j++)
        {
          var office = obj["office"][j];
          if(office["filter"]){
            console.log("INSERT INTO office(title, buildingRoomNum, buildingId, filterId) VALUES(\""+office["title"]+"\",\""+office["buildingRoomNum"]+"\","+buildingId+","+office["filter"]+");");
          }else {
                console.log("INSERT INTO office(title, buildingRoomNum, buildingId) VALUES(\""+office["title"]+"\",\""+office["buildingRoomNum"]+"\","+buildingId+");");
            }
        }
      }

        res.send("done");
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
