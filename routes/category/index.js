var express = require('express');
var router = express.Router();

const send = require('./send');
const all = require('./all');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('routes/category/index.js');
});

router.use('/all',all);
router.use('/send',send);
module.exports = router;
