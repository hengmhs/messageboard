var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard' , messages: messages});
});

/* new form */
router.get('/new', function(req, res, next) {
  res.render('form', {title: 'Mini Messageboard'});
});

module.exports = router;
