var React = require('react');

var BookStore = require('../stores/book_store');
var BookIndex = require('./BookIndex');
var ClientActions = require('../actions/client_actions');

var PopularBooks = React.createClass({
  getInitialState: function () {
    return({ books: this.getSixBooks() });
  },

  getSixBooks: function () {
    var all = BookStore.all();
    var sixBooks = [];
    if (all.length > 0) {
      while (sixBooks.length < 8) {
        var randBook = all[Math.floor(Math.random() * all.length)];
        if (!sixBooks.includes(randBook)) {
          sixBooks.push(randBook);
        }
      }
    }
    return sixBooks;
  },

  componentDidMount: function () {
    this.bookListener = BookStore.addListener(this.getBooks);
    ClientActions.fetchBooks();
  },

  componentWillUnmount: function () {
    this.bookListener.remove();
  },

  getBooks: function (){
    this.setState({ books: this.getSixBooks() });
  },

  render: function () {
    // debugger;
    return(
      <div className="popular-books">
        <div className="popular-books-title">
          Popular Books
        </div>
        <div className="book-index">
          <BookIndex books={this.state.books}/>
        </div>
      </div>
    );
  }
});

module.exports = PopularBooks;
