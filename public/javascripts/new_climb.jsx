var React = require('react');
$ = require('jquery');
var ClimbForm = require('./climb_form.jsx');

var NewClimb = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  onSubmit: function(climb) {
    $.ajax({
      url: 'climbs',
      method: 'POST',
      data: climb,
      dataType: 'json',
      success: function(data) {
        this.context.router.transitionTo('/');
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('timeline', status, err.toString());
      }.bind(this)
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

