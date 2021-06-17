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
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard' , messages: messages});
});

/* new form */
router.get('/new', (req, res, next) => {
  res.render('form', {title: 'Mini Messageboard'});
});

/*create new message*/
router.post('/new', (req, res, next) => {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;
  console.log(req.body);
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
});

module.exports = router;
