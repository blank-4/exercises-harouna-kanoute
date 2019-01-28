var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { utilisateur: req.query.user, mdp: req.query.password });
});

router.post('/login', function(req, res, next) {
  res.render('index', { utilisateurReturn: req.body.motdepass});
});

module.exports = router;
