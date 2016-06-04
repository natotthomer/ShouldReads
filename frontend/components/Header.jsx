var React = require('react');
var Link = require('react-router').Link;

var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');

var LoginForm = require('./LoginForm');
var SignupForm = require('./SignupForm');
var Dashboard = require('./Dashboard');
var ShelvesView = require('./ShelvesView');
var Homepage = require('./Homepage');

var Header = React.createClass({

  componentDidMount: function () {
    SessionStore.addListener(this.forceUpdate.bind(this));
    SessionApiUtil.fetchCurrentUser();
  },

  greeting: function(){
    if (SessionStore.isUserLoggedIn()) {
    	return (
    		<div className="greeting-div clearfix">
    			<section className="greeting">Hi, {SessionStore.currentUser().username}!</section> &nbsp;
          <input type="submit" value="logout" onClick={ SessionApiUtil.logout } className="login-button"/>
    		</div>
    	);
    } else {
      return (
        <LoginForm/>
      );
    }
  },

  render: function () {
    if (!SessionStore.currentUserHasBeenFetched()) {
      return (<div/>)
    }

    return (
      <div>
        <header className="header">
          <div className="header-nav clearfix">
            <h1 className="header-logo">
              <a href="/#/" className="header-logo-link">
                should<span className="header-logo-right">reads</span>
              </a>
            </h1>
            { this.greeting() }
          </div>
        </header>
        <section className="main-background">
          <div className="main">
            {this.props.children}
          </div>
        </section>
      </div>
    )
  }
})

module.exports = Header;
