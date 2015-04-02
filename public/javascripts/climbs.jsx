var React = require('react');
var Climb = require('./climb.jsx');
var classnames = require('classnames');

$ = require('jquery');

var Climbs = React.createClass({
  render: function() {
    var self = this;
    var climbs = this.props.climbs.map(function (climb) {
      return (
        <Climb climb={climb} onDelete={self.props.onDelete} />
      );
    });
    return (
      <div>
        {climbs}
      </div>
    )
  }
});

module.exports = Climbs;
