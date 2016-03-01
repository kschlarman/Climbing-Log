var React = require('react');
var ReactDOM = require('react-dom');
var Timeline = require('./timeline.jsx');
var NewClimb = require('./new_climb.jsx');
var EditClimb = require('./edit_climb.jsx');
var Analytics = require('./analytics.jsx');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var App = React.createClass({
  render: function() {

    return (
     <div>
       <div className='main-header'>
        <div className='l-content'>
          <Link to='/'><span className='brand'>Climbing Log</span></Link>
          <div className='main-header-right l-space'>
            <Link className='button' to='analytics'><span>Analytics</span></Link>
            <Link className='button' to='new'>+ Climb</Link>
          </div>
        </div>
      </div>
      
      <div className='l-content'>
        {this.props.children}
      </div>
    </div>
    )
  }
});

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Timeline} />
      <Route path="/new" component={NewClimb }/>
      <Route path="/analytics" component={Analytics }/>
      <Route path="/edit/:id" component={EditClimb} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
