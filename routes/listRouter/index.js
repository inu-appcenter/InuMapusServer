var express = require('express');
var router = express.Router();

const office = require('./office');
const building = require('./building');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('routes/listRouter/index.js');
});

router.use('/office',office);
router.use('/building',building);

module.exports = router;
