var React = require('react');
var classnames = require('classnames');

$ = require('jquery');

var Climbs = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var climbs = this.state.data.map(function (climb) {

    var classes = classnames({
      'climb-card': true,
      'trad': climb.type == 'trad',
      'sport': climb.type == 'sport'
    });

      return (
        <div className={classes}>
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
