var React = require('react');
var ClientActions = require('./../actions/client_actions');
var ErrorStore = require('./../stores/error_store');
var BookStore = require('./../stores/shelf_store');

var BookStatusEdit = React.createClass({
  getInitialState: function () {
    return({ book: this.props.book });
  },

  componentDidMount: function () {
    this.bookListener = BookStore.addListener(this.getBook);
  },

  componentWillUnmount: function () {
    this.bookListener.remove();
  },

  getBook: function () {
    this.setState({ book: BookStore.find(this.props.params.bookId)});
  },

  wantToRead: function () {
    var book = this.state.book;
    book.status = "Want to Read";
    this.setState({ book: book });
    ClientActions.updateBookStatus(book, this.props.onModalClose);
  },

  currentlyReading: function () {
    var book = this.state.book;
    book.status = "Currently Reading";
    this.setState({ book: book });
    ClientActions.updateBookStatus(book, this.props.onModalClose);
  },

  read: function () {
    var book = this.state.book;
    book.status = "Read";
    this.setState({ book: book });
    ClientActions.updateBookStatus(book, this.props.onModalClose);
  },

  __handleClick: function () {

  },

  render: function () {
    return (
      <div className="delete-form-main">
          <button className="add-book-button" onClick={this.wantToRead}>Want to Read</button><br/>
          <button className="add-book-button" onClick={this.currentlyReading}>Currently Reading</button><br/>
          <button className="add-book-button" onClick={this.read}>Read</button><br/><br/>
      </div>
    );
  }
});

module.exports = BookStatusEdit;
