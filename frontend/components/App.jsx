var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var LoginForm = require('./LoginForm');
var SignupForm = require('./SignupForm');
var Dashboard = require('./Dashboard');

var App = React.createClass({

  componentDidMount: function () {
    SessionStore.addListener(this.forceUpdate.bind(this));
    SessionApiUtil.fetchCurrentUser();
  },

  greeting: function(){
    if (SessionStore.isUserLoggedIn()) {
    	return (
    		<nav>
    			<h2>Hi, {SessionStore.currentUser().username}!</h2>
          <input type="submit" value="logout" onClick={ SessionApiUtil.logout } />
    		</nav>
    	);
    } else {
      return (
        <LoginForm/>
      );
    }
  },

  main: function () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <Dashboard/>
      );
    } else {
      return (
        <SignupForm/>
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
          <div className="header-nav">
            <h1 className="header-logo">
              <a href="/" className="logo-link">
                <span className="header-logo-left">should</span>reads
              </a>
            </h1>
            <div className="header-session-nav">
              { this.greeting() }
            </div>
          </div>
        </header>
        <section className="main gradient">
          { this.main() }
          {this.props.children}
        </section>
      </div>
    )
  }
})

module.exports = App;
