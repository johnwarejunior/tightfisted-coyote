var express = require('express');
var router = express.Router();
const db = require('../database/db.js')

router.get('/', function(req, res, next) {
  db.getAllItems()
  .then(allMyToDos => {
    res.render('index', { allMyToDos })
  });
});

router.post('/add/:id', function(req, res, next) {
  const { todo } = req.body
  db.addItems(todo)
  .then(function() {
    res.redirect('/')
  })
  .catch(function(error) {
    next(error)
  })
});

router.post('/complete/:id', function(req, res, next) {
  const { id } = req.params
  db.completeItems(id)
  .then(function() {
    res.redirect('/')
  })
  .catch(error => next(error))
})

module.exports = router;
