var React = require('react');
var BarChart = require("react-chartjs").Bar;

var ClimbsByGrade = React.createClass({
  grades: function() {
    return ["5.4", "5.5", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c", "5.10d"];
  },
  gradeCounts: function() {
    var sparseCounts = { sport: {}, trad: {} };
    var fullCounts = { sport: [], trad: [] }

    this.props.data.forEach(function(gradeData) {
      if (gradeData.type === "sport") {
        sparseCounts.sport[gradeData.grade] = gradeData.count;
      } else {
        sparseCounts.trad[gradeData.grade] = gradeData.count;
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

