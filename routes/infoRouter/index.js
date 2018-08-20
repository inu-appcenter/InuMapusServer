var express = require('express');
var router = express.Router();

const office = require('./office');
const building = require('./building');
const category = require('./category');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('routes/infoRouter/index.js');
});

router.use('/office',office);
router.use('/building',building);
router.use('/category',category);
module.exports = router;
