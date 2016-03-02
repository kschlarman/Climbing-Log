var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Main = React.createClass({
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

module.exports = Main;
