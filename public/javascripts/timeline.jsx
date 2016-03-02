var React = require('react');
var Climbs = require('./climbs.jsx');
var Api = require('./api.js');
var classnames = require('classnames');

var Timeline = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    var self = this;
    Api.getTimeline(function(timeline) {
      self.setState({data: timeline});
    });
  },
  onDelete: function(id) {
    this.removeClimb(id);
    Api.removeClimb(id);
  },
  removeClimb: function(id) {
    var data = this.state.data.map(function(outing) {
      var climbs = outing.climbs.filter(function(climb) {
        return id !== climb.id;
      });

      if (climbs.length > 0) {
        return {
          info: outing.info,
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
      var location = outing.info.location;
      var date = outing.info.date;
     
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

