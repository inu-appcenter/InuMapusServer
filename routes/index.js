var express = require('express');
var router = express.Router();

const infoRouter = require('./infoRouter');
const listRouter = require('./listRouter');
const initRouter = require('./initRouter');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('routes/index.js');
});

router.use('/infoRouter',infoRouter);
router.use('/listRouter',listRouter);
router.use('/initRouter',initRouter);

module.exports = router;
