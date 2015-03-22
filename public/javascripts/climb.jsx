var React = require('react');
var classnames = require('classnames');

$ = require('jquery');

var Climbs = React.createClass({
  getInitialState: function() {
    return {
      open: false
    };
  },
  openCard: function() {
    this.setState({open: !this.state.open});
  },
  render: function() {
    var climb = this.props.climb;

    var classes = classnames({
      'climb-card': true,
      'trad': climb.type == 'trad',
      'sport': climb.type == 'sport',
      'open': this.state.open
    });

    return (
      <div key={climb._id} className={classes} onClick={this.openCard}>
        <span className='name'>{climb.name}</span>
        <span className='grade'>{climb.grade}</span>
        <div className='notes'>
          <b>Notes: </b>{climb.notes}
        </div>
      </div>
    )
  }
});

module.exports = Climbs;

