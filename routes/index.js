var express = require('express');
var router = express.Router();
const yaml = require('js-yaml');
const fs   = require('fs');
let ft = yaml.safeLoad(fs.readFileSync('base/00', 'utf8'));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {name: 'everybody'});
});
module.exports = router;
