var React = require('react');
$ = require('jquery');
var ClimbForm = require('./climb_form.jsx');
var Api = require('./api.js');

var NewClimb = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  onSubmit: function(climb) {
    var self = this;
    Api.createClimb(climb, function() {
      self.context.router.transitionTo('/');
    });
  },
  render: function() {
    return (
      <div>
        <h3>New Climb</h3>
        <ClimbForm climb={{}} onSubmit={this.onSubmit} />
      </div>
    )
  }
});

module.exports = NewClimb;

