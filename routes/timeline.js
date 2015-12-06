var _ = require('lodash');
var express = require('express');
var router = express.Router();

var models  = require('../models');

/* GET /timeline */
router.get('/', function(req, res, next) {
  models.Climb.findAll({
    order: 'date DESC NULLS LAST',
    raw: true
  }).then(function(climbs) {
    var climbs_by_date = _.groupBy(climbs, function(climb) {
      return climb.date;
    });

    var grouped_climbs = _.keys(climbs_by_date).map(function(date) {
      var climbs = climbs_by_date[date];
      return { 
               info: { 
                 date: date, 
                 location: climbs[0].location
               }, 
               climbs: climbs
             };
    })

    res.json(grouped_climbs);
  });
});
 
module.exports = router;
