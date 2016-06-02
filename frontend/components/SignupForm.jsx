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

    var messages = errors[field].map(function (errorMsg, i) {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
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
  			<form onSubmit={this.handleSubmit}>
          <h1>Welcome to Shouldreads!</h1> <br/>

          { this.fieldErrors("base") }
          <div className="signup-form">
            <section className="login-fields">
      				<label>
                  Username:
        					<input type="text" value={this.state.username} onChange={this.usernameChange}/> <br/>
                  { this.fieldErrors("username") }
      				</label>
      				<label>
                Password:
          				<input type="password" value={this.state.password} onChange={this.passwordChange}/> <br/>
                  { this.fieldErrors("password") }
      				</label>
            </section><br/>
            <div className="login-button">
              <input className="login-button" type="submit" value="Sign up!" />
            </div>
          </div>
  			</form>
      </div>
		);
	}
});

module.exports = LoginForm;
