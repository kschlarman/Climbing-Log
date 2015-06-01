var React = require('react');
var Api = require('./api.js');
var ClimbsByType = require('./climbs_by_type.jsx');
var ClimbsByGrade = require('./climbs_by_grade.jsx');

var Analytics = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    var self = this;
    Api.getAnalytics(function(data) {
      self.setState({data: data});
    });
  },
  render: function() {
    return (
      <div>
        <ClimbsByType data={this.state.data}/>
        <ClimbsByGrade data={this.state.data}/>
      </div>
    )
  }
});

module.exports = Analytics;
