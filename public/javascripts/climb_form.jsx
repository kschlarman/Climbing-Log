var React = require('react');

var ClimbForm = React.createClass({
  handleClick: function() {
    var climb = {
      name: this.refs.name.getDOMNode().value,
      grade: this.refs.grade.getDOMNode().value,
      lead: this.refs.lead.getDOMNode().checked,
      type: this.refs.type.getDOMNode().value,
      notes: this.refs.notes.getDOMNode().value,
      location: this.refs.location.getDOMNode().value,
      date: this.refs.date.getDOMNode().value
    };

    this.props.onSubmit(climb);
  },
  render: function() {
    return (
      <div>
        <h3>New Climb</h3>

        <div className="pure-g">
          <div className="pure-u-1-2 pure-form pure-form-stacked">

            <label>Climb Name
              <input type="text" ref="name" placeholder="Exasperator" />
            </label>

            <label>Grade 
              <select defaultValue="5.8" ref="grade">
                <option>5.4<  /option>
                <option>5.5</option>
                <option>5.6</option>
                <option>5.7</option>
                <option>5.8</option>
                <option>5.9</option>
                <option>5.10a</option>
                <option>5.10b</option>
                <option>5.10c</option>
                <option>5.10d</option>
                <option>5.11a</option>
                <option>5.11b</option>
                <option>5.11c</option>
                <option>5.11d</option>
              </select>
            </label>

            <label className="pure-checkbox">
               <input type="checkbox" defaultChecked='false' ref="lead" /> Lead?
            </label>

            <label>Type 
              <select defaultValue="sport" ref="type">
                <option value="sport">Sport</option>
                <option value="trad">Trad</option>
              </select>
            </label>

            <label>Note
              <textarea rows="4" cols="50" ref="notes" placeholder="Cruxy start but sailed through the finish" />
            </label>
          </div>
          
          <div className="pure-u-1-2 pure-form pure-form-stacked">
            <label>Location
              <input type="text" ref="location" placeholder="Squamish" />
            </label>

            <label>Date
              <input type="date" ref="date" />
            </label>
          </div>

          <button className="button inverted" onClick={this.handleClick} >I climbed this!</button>
        </div>
      </div>
    )
  }
});

module.exports = ClimbForm;
