var React = require('react');
var Timeline = require('./timeline.jsx');
var NewClimb = require('./new_climb.jsx');
var EditClimb = require('./edit_climb.jsx');
var Analytics = require('./analytics.jsx');
var Main = require('./main.jsx');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timeline} />
      <Route path="/new" component={NewClimb} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/edit/:id" component={EditClimb} />
    </Route>
  </Router>
);

module.exports = routes;
