var React = require('react');
var Link = require('react-router').Link;

var ClientActions = require('./../actions/client_actions');
var SessionStore = require('./../stores/session_store');
var BookStore = require('./../stores/book_store');

var BookIndex = require('./BookIndex');

var AllBookIndex = React.createClass({

  getInitialState: function () {
    return({ books: BookStore.all() });
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
    return (
      <BookIndex books={this.state.books}/>
    );
  }
});

module.exports = AllBookIndex;
