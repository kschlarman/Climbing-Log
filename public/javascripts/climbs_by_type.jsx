var React = require('react');
var DoughnutChart = require("react-chartjs").Doughnut;

var ClimbsByType = React.createClass({
  typeCounts: function() {
    var counts = {sport: 1, trad: 0}

    this.props.data.forEach(function(gradeData) {
      if (gradeData._id.type === "sport") {
        counts.sport += gradeData.count;
      } else {
        counts.trad += gradeData.count;
      }
    });

    return counts;
  },
  render: function() {
    var chartData;
    var counts = this.typeCounts();

    var data = [{
      value: counts.trad,
      color: "#E74C3C",
      label: "Trad"
    }, {
      value: counts.sport,
      color:"#3498DB",
      label: "Sport"
    }];

    return (
      <div>
        <h3>Climbs by Type</h3>
        <DoughnutChart className='l-full-width' data={data} />
      </div>
    )
  }
});

module.exports = ClimbsByType;

