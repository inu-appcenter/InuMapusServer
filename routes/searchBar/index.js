var express = require('express');
var router = express.Router();

const officeSearch = require('./officeSearch');
const employeeSearch = require('./employeeSearch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('routes/searchBar/index.js');
});

router.use('/officeSearch', officeSearch);
router.use('/employeeSearch', employeeSearch);

module.exports = router;
