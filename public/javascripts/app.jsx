var React = require('react');
var Router = require('react-router');
var Timeline = require('./timeline.jsx');
var NewClimb = require('./new_climb.jsx');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({
  render: function() {

    return (
     <div>
       <div className='main-header'>
        <div className='l-content'>
          <span className='brand'>Climbing Log</span>
          <div className='main-header-right'>
            <Link className='button' to='new'>+ Climb</Link>
          </div>
        </div>
      </div>
      
      <div className='l-content'>
        <RouteHandler/>
      </div>
    </div>
    )
  }
});

var routes = (
  <Route path="/" handler={App}>
    <Route name="new" path="/new" handler={NewClimb}/>
    <DefaultRoute handler={Timeline}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
