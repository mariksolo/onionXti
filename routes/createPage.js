var express = require('express');
var router = express.Router();
var addPage = require('../dbFunctions/addPage');

router.post('/', function(req, res, next) {
    addPage(req.body.content);
    res.render('afterCreate', { title: 'onionXti' });
  });
  
module.exports = router;
  