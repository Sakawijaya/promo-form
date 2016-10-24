var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/customers',require('./customers'));
router.use('/backoffice',require('./backoffice'));
router.use('/ajax',require('./ajax'));
router.use('/manages',require('./manages'));




module.exports = router;
