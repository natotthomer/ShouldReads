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

    UserApiUtil.signup(formData, this.redirectToHome);
	},

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors(this.formType());
    if (!errors[field]) { return; }

    var messages = errors[field][0];

    return <div>{ messages }</div>;
  },

  formType: function () {
    return "signup";
  },

  usernameChange: function (e) {
    var newUsername = e.target.value;
    this.setState({ username: newUsername });
  },

  passwordChange: function (e) {
    var newPassword = e.target.value;
    this.setState({ password: newPassword });
  },

	render: function () {
		return (
      <div>
  			<form onSubmit={this.handleSubmit} class="signup-form">
          <h1 className="signup-welcome">Welcome to Shouldreads!</h1> <br/>

          <div className="signup-form">
    				<label>
              Username:
    					<input type="text" value={this.state.username} onChange={this.usernameChange}/> <br/>
    				</label>
    				<label>
              Password:
      				<input type="password" value={this.state.password} onChange={this.passwordChange}/> <br/>
    				</label>
            <br/>
            <div className="form-errors-div">
              { this.fieldErrors("base") }
            </div>
            <div className="signup-button">
              <input className="login-button" type="submit" value="Sign up!" />
            </div>
          </div>
  			</form>
        <div className="omni-auth-main">

          <a href="auth/twitter/" className="clickable clearfix">
            <div className="omni-auth-sub">
              <div className="twitter-icon left">
                <img src="https://s3.amazonaws.com/shouldreads-dev/homepage_signin_twitter-9922ba9506d10862d03a558f4424c026.png"/>
              </div>
              <div className="twitter-signin-text right">
                Sign in with Twitter
              </div>
            </div>
          </a>
        </div>
        <br/>
        <div className="app-description">
          <p>
            Shouldreads is a web application , based on GoodReads.com, using React.js, Flux, & Ruby on Rails. <br/>
            It's a great way to organize the books you've read, want to read and maybe find your next favorite book!<br/>
            Make an account to get started, or sign in with Twitter!
          </p>
        </div>
      </div>
		);
	}
});

module.exports = LoginForm;
