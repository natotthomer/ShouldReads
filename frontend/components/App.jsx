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
        <nav className="header-session-nav">
          <Link className="header-session-button" to="/login" activeClassName="current">Login</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="header-session-button" to="/signup" activeClassName="current">Sign up</Link>
        </nav>
      );
    }
  },

  render: function () {
    debugger;
    return (
      <div>
        <header className="header">
          <div className="header-nav">
            <h1 className="header-logo"><a href="/" className="logo-link"><span className="header-logo-left">Should</span>reads</a></h1>
            <div>
              { this.greeting() }
            </div>
          </div>
        </header>
        <section className="main">
          {this.props.children}
        </section>
      </div>
    )
  }
})

module.exports = App;
