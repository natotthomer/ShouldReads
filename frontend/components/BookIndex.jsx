var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var ClientActions = require('./../actions/client_actions');

var BookStore = require('./../stores/book_store');
var BookIndexItem = require('./BookIndexItem');
var BookShow = require('./BookShow');

var BookIndex = React.createClass({

  getInitialState: function () {
    return ({ books: BookStore.all()});
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
    if (!SessionStore.currentUserHasBeenFetched()) {
      return (
        <div/>
      );
    }

    return (
      <ul>
        {
          this.props.books.map(function (book) {
            return (<BookIndexItem book={book} key={book.id}/>);
          })
        }
      </ul>
    );
  }
});

module.exports = BookIndex;
