var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Climb = require('../models/Climb.js');

/* GET /todos */
router.get('/', function(req, res, next) {
  Climb.find(function(err, climbs) {
    if (err) return next(err);
    res.json(climbs);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Climb.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Climb.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Climb.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    console.log(req.body)
    console.log(post)
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Climb.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
