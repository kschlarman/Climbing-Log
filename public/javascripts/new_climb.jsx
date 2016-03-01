var React = require('react');
$ = require('jquery');
var ClimbForm = require('./climb_form.jsx');
var Api = require('./api.js');

var NewClimb = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  onSubmit: function(climb) {
    var self = this;
    Api.createClimb(climb, function() {
      self.context.router.push('/');
    });
  },
  render: function() {
    return (
      <div>
        <h3>New Climb</h3>
        <ClimbForm onSubmit={this.onSubmit} />
      </div>
    )
  }
});

module.exports = NewClimb;

