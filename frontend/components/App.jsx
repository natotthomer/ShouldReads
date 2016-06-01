var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');

var App = React.createClass({

  componentDidMount: function () {
    SessionStore.addListener(this.forceUpdate.bind(this));
    SessionApiUtil.fetchCurrentUser();
  },

  greeting: function(){
    if (SessionStore.isUserLoggedIn()) {
    	return (
    		<hgroup>
    			<h2>Hi, {SessionStore.currentUser().username}!</h2>
    			<input type="submit" value="logout" onClick={ SessionApiUtil.logout } />
    		</hgroup>
    	);
    } else if (["/login", "/signup"].indexOf(this.props.location.pathname) === -1) {
      return (
        <nav>
          <Link to="/login" activeClassName="current">Login</Link>
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      );
    }
  },

  render: function () {

    return (
      <div>
        <header className="header">
          <div className="header-nav">
            <h1 className="header-logo"><a href="/" className="logo-link">ShouldReads</a></h1>
          </div>
        </header>
        <section className="main">
          { this.greeting() }
          {this.props.children}
        </section>
      </div>
    )
  }
})

module.exports = App;
