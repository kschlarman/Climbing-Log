var React = require('react');
var classnames = require('classnames');

$ = require('jquery');

var Climbs = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    var climbs = this.props.climbs.map(function (climb) {

    var classes = classnames({
      'climb-card': true,
      'trad': climb.type == 'trad',
      'sport': climb.type == 'sport'
    });

      return (
        <div key={climb._id} className={classes}>
          <span className='name'>{climb.name}</span>
          <span className='grade'>{climb.grade}</span>
        </div>
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
