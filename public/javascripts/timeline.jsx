var React = require('react');
var Climbs = require('./climbs.jsx');
var classnames = require('classnames');


$ = require('jquery');

var Timeline = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: 'timeline',
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('timeline', status, err.toString());
      }.bind(this)
    });
  },
  onDelete: function(id) {
    this.removeClimb(id);
    $.ajax({
      url: 'climbs/' + id,
      method: 'DELETE',
      dataType: 'json',
      error: function(xhr, status, err) {
        console.error('timeline', status, err.toString());
      }.bind(this)
    });
  },
  removeClimb: function(id) {
    var data = this.state.data.map(function(outing) {
      var climbs = outing.climbs.filter(function(climb) {
        return id !== climb._id;
      });

      if (climbs.length > 0) {
        return {
          _id: outing._id,
          climbs: climbs
        };
      } 
    });

    data = data.filter(function(outing) { return outing != undefined }); 

    this.setState({data: data});
  },
  renderDate: function(dateString) {
    if (dateString == null) return; 

    var date = new Date(dateString); 
    return '(' + date.toLocaleDateString() + ')';
  },
  render: function() {
    var self = this;
    var outings = this.state.data.map(function (outing) {
      var location = outing._id.location;
      var date = outing._id.date;
     
      return (
        <div key={location + date}>
          <h3>
            <span className='timeline-location'>{location}</span>
            <span className='timeline-date'>{self.renderDate(date)}</span>
          </h3>
          <Climbs climbs={outing.climbs} onDelete={self.onDelete} />
        </div>
      );
    });
    return (
      <div>
        {outings}
      </div>
    );
  }
});

module.exports = Timeline;

