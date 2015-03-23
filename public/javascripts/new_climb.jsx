var React = require('react');

var NewClimb = React.createClass({
  render: function() {
    return (
      <div>
        <h3>New Climb</h3>
        <form className="pure-form pure-form-stacked">
            <label>Climb Name
              <input type="text" placeholder="Exasperator" />
            </label>

            <label>Location
              <input type="text" placeholder="Squamish" />
            </label>

            <label>Date
              <input type="date" />
            </label>

            <label>Grade
              <select>
                <option>5.4</option>
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

            <label><input type="radio" name="type" value="sport" />Sport</label>
            <label><input type="radio" name="type" value="trad" />Trad</label>

            <label className="pure-checkbox">
                <input type="checkbox" checked="false" />Lead?
            </label>

            <label>Note
              <textarea name="description" rows="4" cols="50" value="This is a description." />
            </label>

            <button type="submit" className="button">Sign in</button>
        </form>
      </div>
    )
  }
});

module.exports = NewClimb;

