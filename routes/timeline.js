var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Climb = require('../models/Climb.js');

/* GET /timeline */
router.get('/', function(req, res, next) {
  Climb.aggregate(
    { $group: {
        _id : { date: "$date", location: "$location" },
        climbs: { $push: "$$ROOT" },
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
