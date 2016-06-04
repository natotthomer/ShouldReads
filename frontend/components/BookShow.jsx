var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var ClientActions = require('./../actions/client_actions');

var BookStore = require('./../stores/book_store');
var BookIndexItem = require('./BookIndexItem');

var BookShow = React.createClass({
  getInitialState: function () {
    return ({ book: BookStore.find(this.props.params.bookId)});
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ book: newProps.book });
  },

  componentDidMount: function () {
    this.bookListener = BookStore.addListener(this.getBook);
    ClientActions.fetchBook(this.props.params.bookId);
  },

  componentWillUnmount: function () {
    this.bookListener.remove();
  },

  getBook: function () {
    this.setState({ book: BookStore.find(this.props.params.bookId)});
  },

  render: function () {
    if (!SessionStore.currentUserHasBeenFetched() || this.state.book === undefined) {
      return (<div/>);
    }
    return (
      <div className="book-show">
        <div className="book-show-title">{this.state.book.title}</div><br/><br/>
        <div>{this.state.book.author_fname + " " + this.state.book.author_lname}</div>
      </div>
    );
  }
});

module.exports = BookShow;
