var express = require('express');
var router = express.Router();

var models  = require('../models/index');

/* GET /climbs */
router.get('/', function(req, res, next) {
  models.Climb.all()
  .then(function(climbs) {
    res.json(climbs);
   })
  .catch(function(err) {
    return next(err);
  });
});

/* POST /climbs */
router.post('/', function(req, res, next) {
  models.Climb.create(req.body)
  .then(function(climb) {
    res.json(climb);
  })
  .catch(function(err) {
    return next(err);
  });
});

/* GET /climbs/id */
router.get('/:id', function(req, res, next) {
  models.Climb.findById(req.params.id)
  .then(function(climb) {
    res.json(climb);
  })
  .catch(function(err) {
    return next(err);
  });
});

/* PUT /climbs/:id */
router.put('/:id', function(req, res, next) {
  models.Climb.findById(req.params.id)
  .then(function(climb) {
    climb.update(req.body);
    res.json(climb);
  })
  .catch(function(err) {
    return next(err);
  });
});

/* DELETE /climbs/:id */
router.delete('/:id', function(req, res, next) {
  models.Climb.findById(req.params.id)
  .then(function(climb) {
    climb.destroy();
    res.json(climb);
  })
  .catch(function(err) {
    return next(err);
  });
});

module.exports = router;
