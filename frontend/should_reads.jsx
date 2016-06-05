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

var Header = require('./components/Header.jsx');
var Homepage = require('./components/Homepage.jsx');
var BookIndex = require('./components/BookIndex');
var BookShow = require('./components/BookShow');
var BookForm = require('./components/BookForm');
var ShelvesView = require('./components/ShelvesView');
var ShelfForm = require('./components/ShelfForm');
var ShelfEdit = require('./components/ShelfEdit');

var routes = (
  <Route path="/" component={Header}>
    <IndexRoute component={Homepage}/>
    <Route path="shelves/new" component={ShelfForm} onEnter={_ensureLoggedIn}/>
    <Route path="(users/:userId/)shelves/:shelfId" component={ShelvesView} onEnter={_ensureLoggedIn}/>
    <Route path="books" component={BookIndex} onEnter={_ensureLoggedIn}/>
    <Route path="books/new" component={BookForm} onEnter={_ensureLoggedIn}/>
    <Route path="books/:bookId" component={BookShow} onEnter={_ensureLoggedIn}/>
  </Route>
  // <Route path="shelves/:shelfId/edit" component={ShelfEdit} onEnter={_ensureLoggedIn}/>
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
  Modal.setAppElement(document.body);
  var root = document.getElementById("content");
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, root);
});
