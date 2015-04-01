var React = require('react');
$ = require('jquery');
var ClimbForm = require('./climb_form.jsx');

var EditClimb = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function() {
    return {climb: {}};
  },
  componentDidMount: function() {
    $.ajax({
      url: 'climbs/' + this.props.params.id,
      dataType: 'json',
      success: function(data) {
        this.setState({climb: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('timeline', status, err.toString());
      }.bind(this)
    });
  },
  onSubmit: function(climb) {
    $.ajax({
      url: 'climbs/' + this.props.params.id,
      method: 'PUT',
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
        <h3>Edit Climb</h3>
        <ClimbForm climb={this.state.climb} onSubmit={this.onSubmit} />
      </div>
    )
  }
});

module.exports = EditClimb;

