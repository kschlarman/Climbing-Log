var React = require('react');

var ClimbForm = React.createClass({
  getInitialState: function() {
    var today = new Date();
    return {
      name: "",
      grade: "5.8",
      lead: true,
      type: "sport",
      notes: "",
      location: "",
      date: today.toISOString().slice(0, 10)
    };
  },
  handleClick: function() {
    this.props.onSubmit(this.state);
  },
  handleNameChange: function(event) {
    this.setState({name: event.target.value});
  },
  handleLocationChange: function(event) {
    this.setState({location: event.target.value});
  },
  handleLeadChange: function(event) {
    this.setState({lead: event.target.checked});
  },
  handleGradeChange: function(event) {
    this.setState({grade: event.target.value});
  },
  handleTypeChange: function(event) {
    this.setState({type: event.target.value});
  },
  handleNotesChange: function(event) {
    this.setState({notes: event.target.value});
  },
  handleDateChange: function(event) {
    this.setState({date: event.target.value});
  },

  render: function() {  
    return (
      <div>

        <div className="pure-g">
          <div className="pure-u-1-2 pure-form pure-form-stacked">

            <label>Climb Name
              <input type="text" 
                onChange={this.handleNameChange}
                placeholder="Exasperator"
                value={this.state.name} />
            </label>

            <label>Grade 
              <select onChange={this.handleGradeChange} value={this.state.grade}>
                <option>5.4</option>
                <option>5.5</option>
                <option>5.6</option>
                <option>5.7</option>
                <option value="5.8">5.8</option>
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
               <input type="checkbox"
                 onChange={this.handleLeadChange}
                 checked={this.state.lead}/> Lead?
            </label>

            <label>Type 
              <select defaultValue="sport"
                onChange={this.handleTypeChange}
                value={this.state.value}>
                <option value="sport">Sport</option>
                <option value="trad">Trad</option>
              </select>
            </label>

            <label>Note
              <textarea
                rows="4" cols="50"
                placeholder="Cruxy start but sailed through the finish"
                onChange={this.handleNotesChange}
                value={this.state.notes}/>
            </label>
          </div>
          
          <div className="pure-u-1-2 pure-form pure-form-stacked">
            <label>Location
              <input type="text"
                placeholder="Squamish"
                onChange={this.handleLocationChange}
                value={this.state.location}/>
            </label>

            <label>Date
              <input type="date"
                onChange={this.handleDateChange}
                value={this.state.date}/>
            </label>
          </div>

          <button className="button inverted" onClick={this.handleClick} >I climbed this!</button>
        </div>
      </div>
    )
  }
});

module.exports = ClimbForm;
