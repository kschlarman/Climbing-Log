var React = require('react');
$ = require('jquery');
var ClimbForm = require('./climb_form.jsx');
var Api = require('./api.js');

var EditClimb = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {climb: {}};
  },
  componentDidMount: function() {
    var self = this;
    Api.getClimb(this.props.params.id, function(data) {
      self.setState({climb: data});
    });
  },
  onSubmit: function(climb) {
    var self = this;
    Api.editClimb(this.props.params.id, climb, function(data) {
      self.context.router.push('/');
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

