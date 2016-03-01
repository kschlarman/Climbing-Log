var React = require('react');

var ClimbForm = React.createClass({
  handleClick: function() {
    var climb = {
      name: this.refs.name.value,
      grade: this.refs.grade.value,
      lead: this.refs.lead.checked,
      type: this.refs.type.value,
      notes: this.refs.notes.value,
      location: this.refs.location.value,
      date: this.refs.date.value
    };

    this.props.onSubmit(climb);
  },
  componentDidUpdate: function() {
    this.refs.name.value = this.props.climb.name;
    this.refs.grade.value = this.props.climb.grade;
    this.refs.lead.checked = this.props.climb.lead;
    this.refs.type.value = this.props.climb.type;
    this.refs.notes.value = this.props.climb.notes;
    this.refs.location.value = this.props.climb.location;

    if (this.props.climb.date) {
      var date = new Date(this.props.climb.date);
      this.refs.date.value = date.toISOString().substring(0, 10); 
    }
  },
  render: function() {  
    return (
      <div>

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
