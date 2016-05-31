var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var App = require('./component/App.jsx');

var routes = (
  <Route path="/" component={App}>

  </Route>
)

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  ReactDOM.render(</Router history={hashHistory} routes={routes}/>, root);
});
