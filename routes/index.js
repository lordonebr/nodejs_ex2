var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { firstName: 'André' , lastName: 'Santos' });
  res.render('index', { firstName: req.param('firstName') , lastName: req.param('lastName') });
});

module.exports = router;
