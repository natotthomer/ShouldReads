var React = require('react');
var Sidebar = require('./Sidebar');
var BookIndex = require('./BookIndex');
var ShelfIndex = require('./ShelfIndex');
var SessionStore = require('./../stores/session_store');
var BookStore = require('./../stores/book_store');
var SessionApiUtil = require('./../util/session_api_util');
var ClientActions = require('./../actions/client_actions');

var ReadShow = React.createClass({
  getInitialState: function () {
    return ({ user: SessionStore.currentUser(), books: [] });
  },

  componentDidMount: function () {
    this.bookListener = BookStore.addListener(this.getBooks);
    // this.sessionListener = SessionStore.addListener(this.username);
    // SessionApiUtil.fetchCurrentUser();
    ClientActions.fetchBooks();
  },
  //
  // username: function() {
  //   this.setState({ user: SessionStore.currentUser() });
  // },

  componentWillUnmount: function() {
    this.bookListener.remove();
    // this.sessionListener.remove();
  },

  getBooks: function () {
    // debugger;
    var books = [];
    this.state.user.read.forEach(function (readBooks) {
      books.push(BookStore.find(readBooks.book_id));
    });
    this.setState({ books: books });
  },

  render: function () {
    return(
      <div>
        <div className="shelf-index-left left">
          <ShelfIndex/>
        </div>
        <div className="shelf-detail">
          <h1 className="status-header">Books I've Read</h1>
          <BookIndex books={this.state.books}/>
        </div>
      </div>
    )
  }
});

module.exports = ReadShow;
