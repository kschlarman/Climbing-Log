var React = require('react');

var App = React.createClass({
  render: function(){
    return (
      <h1>
        This is some cool stuff, so?
      </h1>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
);
