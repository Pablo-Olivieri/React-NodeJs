// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Guillermo' });
// });

// module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('admin/login')
  // res.render('admin/login', { layout: 'admin/layout' });
});

module.exports = router;
