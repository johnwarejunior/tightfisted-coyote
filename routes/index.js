var express = require('express');
var router = express.Router();
const db = require('../database/db.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'To Do List' });
});

router.get('/', function(req, res, next) {
  console.log('this is a homepage');
  db.getAllItems()
  .then(allMyToDos => {
    console.log('allMyToDos ========>', allMyToDos);
    res.render('index', { allMyToDos })
  });
});

router.post('/add/:id', function(req, res, next) {
  const {item} = req.body
  console.log('item', item)
  db.addItems(item)
  .then(function() {
    res.redirect('/')
  });
});

module.exports = router;
