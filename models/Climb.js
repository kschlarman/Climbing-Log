var mongoose = require('mongoose');

var ClimbSchema = new mongoose.Schema({
  name: String,
  grade: String,
  type: String,
  area: String,
  location: String,
  lead: Boolean,
  date: Date,
  notes: String
});

ClimbSchema.options.toJSON = {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
};

module.exports = mongoose.model('Climb', ClimbSchema);
