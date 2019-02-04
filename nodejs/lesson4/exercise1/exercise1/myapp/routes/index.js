var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var name = 'harouna';
  var value = 'Hello';
  var options = {
    expires: new Date(Date.now() + 900000),
    httpOnly: true
    };
    res.cookie(name, value, options);
    res.render('index', { title: 'Express' });   
});

module.exports = router;
