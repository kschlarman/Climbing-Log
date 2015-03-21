var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Climb = require('../models/Climb.js');

/* GET /climbs */
router.get('/', function(req, res, next) {
  Climb.find(function(err, climbs) {
    if (err) return next(err);
    res.json(climbs);
  });
});

/* POST /climbs */
router.post('/', function(req, res, next) {
  Climb.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /climbs/id */
router.get('/:id', function(req, res, next) {
  Climb.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /climbs/:id */
router.put('/:id', function(req, res, next) {
  Climb.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    console.log(req.body)
    console.log(post)
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /climbs/:id */
router.delete('/:id', function(req, res, next) {
  Climb.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
