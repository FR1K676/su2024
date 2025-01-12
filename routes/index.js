var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Su-26', function(req, res, next) {
  res.send("<h1>Su26<h1>");
});
router.get('/Su-29', function(req, res, next) {
  res.send("<h1>Su29<h1>");
});
router.get('/Su-31', function(req, res, next) {
  res.send("<h1>Su<h1>");
});

module.exports = router;
