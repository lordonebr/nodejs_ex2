var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
    res.render('process-form', { name: req.body.name, email: req.body.email , address: req.body.address });
  });
  
  module.exports = router;