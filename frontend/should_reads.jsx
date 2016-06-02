var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var App = require('./components/App.jsx');
var LoginForm = require('./components/LoginForm.jsx');
var BookIndex = require('./components/BookIndex');
var ShelfIndex = require('./components/ShelfIndex');
var ShelfShow = require('./components/ShelfShow');
var BookShow = require('./components/BookShow');

var SessionStore = require('./stores/session_store');
var SessionApiUtil = require('./util/session_api_util');

// <IndexRoute component={BookIndex}/>
// <IndexRoute component={BookIndex}/>
// <Route path="books" component={BookIndex}/>
var routes = (
  <Route path="/" component={App}>
    <Route path="(users/:userId/)shelves" component={ShelfIndex} onEnter={_ensureLoggedIn}/>
    <Route path="books/:bookId" component={BookShow} onEnter={_ensureLoggedIn}/>
  </Route>
);

function _ensureLoggedIn(nextState, replace, asyncDoneCallback) {
  if (SessionStore.currentUserHasBeenFetched()) {
    redirectIfNotLoggedIn();
  } else {
    SessionApiUtil.fetchCurrentUser(redirectIfNotLoggedIn);
  }

  function redirectIfNotLoggedIn() {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
    asyncDoneCallback();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>, root);
});
