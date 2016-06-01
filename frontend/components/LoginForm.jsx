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

    if (this.props.location.pathname === "/login") {
      SessionApiUtil.login(formData, this.redirectToHome);
    } else {
      UserApiUtil.signup(formData, this.redirectToHome);
    }
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
    return this.props.location.pathname.slice(1);
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
    var navLink;
    if (this.formType() === "login") {
      navLink = <Link to="/signup">sign up instead</Link>;
    } else {
      navLink = <Link to="/login">log in instead</Link>;
    }

		return (
			<form onSubmit={this.handleSubmit}>
        Welcome to ShouldReads! Please { this.formType() } or { navLink }
        { this.fieldErrors("base") }

        <br />
				<label> Username: <br/> <br/>
        { this.fieldErrors("username") }<br/>
					<input type="text" value={this.state.username} onChange={this.usernameChange}/>
				</label>

        <br />
				<label> Password:
        { this.fieldErrors("password") }
					<input type="password" value={this.state.password} onChange={this.passwordChange}/>
				</label>

        <br />
				<input type="submit" value="Submit" />
			</form>
		);
	}
});

module.exports = LoginForm;