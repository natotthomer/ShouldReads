var React = require('react');
var Link = require('react-router').Link;

var ClientActions = require('./../actions/client_actions');
var SessionStore = require('./../stores/session_store');
var BookStore = require('./../stores/book_store');

var BookIndexItem = require('./BookIndexItem');
var BookShow = require('./BookShow');

var BookIndex = React.createClass({

  getInitialState: function () {
    return ({ books: [] });
  },

  componentDidMount: function () {
    this.bookListener = BookStore.addListener(this.getBooks);
    ClientActions.fetchBooks();
  },

  componentWillUnmount: function () {
    this.bookListener.remove();
  },

  getBooks: function (){
    this.setState({ books: BookStore.all() });
  },

  render: function () {
    if (SessionStore.currentUserHasBeenFetched()) {
      return (
        <div className="book-index">
          All the books!
          <ul>
            {
              this.state.books.map(function (book) {
                return (<BookIndexItem book={book} key={book.id}/>);
              })
            }
          </ul>
        </div>
      );
    } else {
      return (<div/>);
    }
  }
});

module.exports = BookIndex;
