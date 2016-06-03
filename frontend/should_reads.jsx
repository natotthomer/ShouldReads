var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var SessionStore = require('./stores/session_store');
var SessionApiUtil = require('./util/session_api_util');

var Header = require('./components/Header.jsx');
var Homepage = require('./components/Homepage.jsx');
var BookShow = require('./components/BookShow');
var ShelvesView = require('./components/ShelvesView');
var ShelfForm = require('./components/ShelfForm');

var routes = (
  <Route path="/" component={Header}>
    <IndexRoute component={Homepage}/>
    <Route path="shelves/" component={ShelfForm} onEnter={_ensureLoggedIn}/>
    <Route path="(users/:userId/)shelves/:shelfId" component={ShelvesView} onEnter={_ensureLoggedIn}/>
    <Route path="books/:bookId" component={BookShow} onEnter={_ensureLoggedIn}/>
  </Route>
);

function _ensureLoggedIn(nextState, replace, asyncDoneCallback) {
  var sessionListener = SessionStore.addListener(redirectIfNotLoggedIn);
  if (SessionStore.currentUserHasBeenFetched()) {
    redirectIfNotLoggedIn();
  } else {
    SessionApiUtil.fetchCurrentUser(redirectIfNotLoggedIn);
  }

  function redirectIfNotLoggedIn() {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
    sessionListener.remove()
    asyncDoneCallback();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, root);
});
