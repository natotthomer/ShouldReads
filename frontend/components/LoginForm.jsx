var React = require('react');
var Link = require('react-router').Link;
var SessionApiUtil = require('./../util/session_api_util');
var SessionStore = require('./../stores/session_store');
var ErrorStore = require('./../stores/error_store');
var UserApiUtil = require('./../util/user_api_util');

var LoginForm = React.createClass({

  getInitialState: function () {
    return {
      username: "",
      password: ""
    };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    this.refs.autofocus.focus();
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn: function () {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  redirectToHome: function () {
    this.context.router.push("/");
  },

	handleSubmit: function (e) {
		e.preventDefault();

		var formData = {
			username: this.state.username,
			password: this.state.password
		};

    SessionApiUtil.login(formData, this.redirectToHome);
	},

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors(this.formType());
    if (!errors[field]) { return; }

    var messages = errors[field].map(function (errorMsg, i) {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType: function () {
    return "login";
  },

  usernameChange: function (e) {
    var newUsername = e.target.value;
    this.setState({ username: newUsername });
  },

  passwordChange: function (e) {
    var newPassword = e.target.value;
    this.setState({ password: newPassword });
  },

  guestLogin: function (e) {
    e.preventDefault();
    var formData = {
      username: "guest",
      password: "password1"
    };
    SessionApiUtil.login(formData, this.redirectToHome);
  },

	render: function () {
		return (
      <div className="header-nav-login clearfix">
  			<form onSubmit={this.handleSubmit}>


          <section className="login-fields clearfix">

    				<label className="login-form-el">
                Username:
      					<input ref="autofocus" className="header-input" type="text" value={this.state.username} onChange={this.usernameChange}/>
    				</label>&nbsp;
            <label className="login-form-el">
              Password:
              <input type="password" value={this.state.password} onChange={this.passwordChange}/>
            </label><br/>
            <div className="login-errors-div">
              { this.fieldErrors("base") }
            </div>
          </section>
          <div className="login-buttons right">
            <div className="login-button-container">
              <input className="login-button" type="submit" value="Sign In" />
            </div><br/>
            <div className="login-button-container">
              <button className="login-button" onClick={this.guestLogin}>Guest Login</button>
            </div>
          </div>
  			</form>
      </div>
		);
	}
});

module.exports = LoginForm;
