var express = require('express');
var router = express.Router();

const phonebook = require('./phonebook');
const all = require('./all');
const filter = require('./filter');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('routes/icon/index.js');
});

router.use('/phonebook',phonebook);
router.use('/all',all);
router.use('/filter',filter);

module.exports = router;
