var React = require('react');
var Sidebar = require('./Sidebar');
var BookIndex = require('./BookIndex');
var ShelfIndex = require('./ShelfIndex');
var SessionStore = require('./../stores/session_store');
var BookStore = require('./../stores/book_store');
var ClientActions = require('./../actions/client_actions');

var ReadShow = React.createClass({
  getInitialState: function () {
    return ({ user: SessionStore.currentUser(), books: [] });
  },

  componentDidMount: function () {
    this.bookListener = BookStore.addListener(this.getBooks);
    ClientActions.fetchBooks();
  },

  componentWillUnmount: function() {
    this.bookListener.remove();
  },

  getBooks: function () {
    var books = [];
    this.state.user.read.forEach(function (readBooks) {
      books.push(BookStore.find(readBooks.book_id));
    });
    this.setState({ books: books });
  },

  render: function () {
    return(
      <div>
        <div className="shelf-index-left">
          <ShelfIndex/>
        </div>
        <BookIndex books={this.state.books}/>
      </div>
    )
  }
});

module.exports = ReadShow;
