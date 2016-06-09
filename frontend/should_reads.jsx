var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Modal = require('react-modal');
var Router = ReactRouter.Router;
var Route = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var SessionStore = require('./stores/session_store');
var SessionApiUtil = require('./util/session_api_util');
var GoogleUtil = require('./util/google_util');

var Header = require('./components/Header.jsx');
var Homepage = require('./components/Homepage.jsx');
var AllBookIndex = require('./components/AllBookIndex');
var BookShow = require('./components/BookShow');
var BookForm = require('./components/BookForm');
var ShelvesView = require('./components/ShelvesView');
var ReadShow = require('./components/ReadShow');
var WantShow = require('./components/WantShow');
var CurrentlyShow = require('./components/CurrentlyShow');

var routes = (
  <Route path="/" component={Header}>
    <IndexRoute component={Homepage}/>
    <Route path="(users/:userId/)shelves/:shelfId" component={ShelvesView} onEnter={_ensureLoggedIn}/>
    <Route path="books" component={AllBookIndex} onEnter={_ensureLoggedIn}/>
    <Route path="books/new" component={BookForm} onEnter={_ensureLoggedIn}/>
    <Route path="books/read" component={ReadShow} onEnter={_ensureLoggedIn}/>
    <Route path="books/want" component={WantShow} onEnter={_ensureLoggedIn}/>
    <Route path="books/currently" component={CurrentlyShow} onEnter={_ensureLoggedIn}/>
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
      replace('/');
    }
    sessionListener.remove()
    asyncDoneCallback();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.body);
  var root = document.getElementById("content");
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, root);
});
