var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var LoginForm = require('./LoginForm');
var SignupForm = require('./SignupForm');
var Dashboard = require('./Dashboard');
var ShelvesView = require('./ShelvesView');

var Homepage = React.createClass({

  getInitialState: function (){
    return ({ });
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.onLogout);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  onLogout: function () {
    this.setState({});
  },

  toRender: function () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <Dashboard user={SessionStore.currentUser()}/>
      );
    } else {
      return (
        <SignupForm/>
      );
    }
  },

  render: function () {
    return (
      this.toRender()
    );
  }
});

module.exports = Homepage;
