var express = require('express');
var router = express.Router();

var models = require('../models/index');

/* GET /analytics */
router.get('/', function(req, res, next) {
  models.Climb.findAll({
    attributes: ['grade', 'type', [models.sequelize.fn('COUNT', models.sequelize.col('grade')), 'count']],
    group: ['grade', 'type']
  })
  .then(function(climbs) {
    res.json(climbs);
  })
  .catch(function(err) {
    return next(err);
  });
});


module.exports = router;
