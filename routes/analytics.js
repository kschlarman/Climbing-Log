var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Climb = require('../models/Climb.js');

/* GET /analytics */
router.get('/', function(req, res, next) {
  console.log("----");
  Climb.aggregate(
    { $group: {
        _id : { grade: '$grade', type: '$type' },
        count: { $sum: 1 },
      }
    },
    { $sort: { _id: -1 } },
    function(err, climbs) {
      if (err) return next(err);
      res.json(climbs);
    }
  );
});
 
module.exports = router;
