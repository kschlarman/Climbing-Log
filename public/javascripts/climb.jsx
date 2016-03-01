var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var classnames = require('classnames');

$ = require('jquery');

var Climb = React.createClass({
  getInitialState: function() {
    return {
      open: false
    };
  },
  openCard: function() {
    this.setState({open: !this.state.open});
  },
  onDelete: function(e) {
    e.stopPropagation();
    if (window.confirm("Do you really want to delete this climb?")) { 
      this.props.onDelete(this.props.climb.id);
    }
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
        <div className="fold">
          <div className='notes'>
            <b>Notes: </b>{climb.notes}
          </div>
          <div className='actions'>
            <a className='button inverted' onClick={this.onDelete}>Delete</a>
            <Link className='button inverted' to={`/edit/${climb.id}`}>Edit</Link>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Climb;

