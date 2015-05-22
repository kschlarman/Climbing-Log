var React = require('react');
var BarChart = require("react-chartjs").Bar;
var Api = require('./api.js');

var ClimbsByGrade = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
    var self = this;
    Api.getAnalytics(function(data) {
      self.setState({ data: data });
    });
  },
  grades: function() {
    return ["5.4", "5.5", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b"];
  },
  gradeCounts: function() {
    var sparseCounts = { sport: {}, trad: {} };
    var fullCounts = { sport: [], trad: [] }

    this.state.data.forEach(function(gradeData) {
      if (gradeData._id.type === "sport") {
        sparseCounts.sport[gradeData._id.grade] = gradeData.count;
      } else {
        sparseCounts.trad[gradeData._id.grade] = gradeData.count;
      }
    });

    this.grades().map(function(grade) {
      fullCounts.sport.push(sparseCounts.sport[grade] || 0);
      fullCounts.trad.push(sparseCounts.trad[grade] || 0);
    });

    return fullCounts;
  },
  render: function() {
    var chartData;
    var data = {
      labels: this.grades(), 
      datasets: [{
        label: "Sport",
        fillColor: "#3498DB",
        data: this.gradeCounts().sport 
      }, {
        label: "Trad",
        fillColor: "#E74C3C",
        data: this.gradeCounts().trad
      }]
    };

    return (
      <div>
        <h3>Climbs by Grade</h3>
        <BarChart className='l-full-width' data={data}/>
      </div>
    )
  }
});

module.exports = ClimbsByGrade;

