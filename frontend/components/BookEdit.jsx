var React = require('react');
var SessionStore = require('./../stores/session_store');
var ErrorStore = require('./../stores/error_store');
var ClientActions = require('./../actions/client_actions');

var BookStore = require('./../stores/book_store');

var BookEdit = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    var book = BookStore.find(this.props.book.id);
    return ({
      title: book.title,
      author_fname: book.author_fname,
      author_lname: book.author_lname,
      id: book.id
    });
  },

  componentDidMount: function () {
    this.bookListener = BookStore.addListener(this.getBook);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this))
    ClientActions.fetchBook(this.props.book.id);
  },

  componentWillUnmount: function () {
    this.bookListener.remove();
    this.errorListener.remove();
  },

  getBook: function () {
    var book = BookStore.find(this.props.book.id);
    this.setState({
      title: book.title,
      author_fname: book.author_fname,
      author_lname: book.author_lname,
      id: book.id
    });
  },

  titleChange: function (e) {
    this.setState({ title: e.target.value });
  },

  authorFNameChange: function (e) {
    this.setState({ author_fname: e.target.value });
  },

  authorLNameChange: function (e) {
    this.setState({ author_lname: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var bookData = {
      title: this.state.title,
      author_fname: this.state.author_fname,
      author_lname: this.state.author_lname,
      id: this.props.book.id
    };
    ClientActions.updateBook(bookData, this.props.onModalClose);
  },

  redirectToBook: function (bookId) {
    this.context.router.push("books/" + bookId);
  },

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors("bookedit");
    if (!errors[field]) { return; }
    var messages = errors[field][0]

    return <div>{ messages }</div>;
  },

  render: function () {
    if (this.state.title === undefined) {
      return (<div/>);
    }

    if (SessionStore.isUserLoggedIn()) {
      return (
        <form className="modal-form" onSubmit={this.handleSubmit}>
          <h1 className="modal-header">Edit Book</h1><br/><br/>
          <div className="modal-form-field">
            <label className="form-label">
              Title: <input type="text" value={this.state.title} onChange={this.titleChange} className="modal-form-input modal-book-title"/>
            </label>
          </div>
          <div className="modal-form-field">
            <label className="form-label">
              Author First Name: <input type="text" value={this.state.author_fname} onChange={this.authorFNameChange} className="modal-form-input"/>
            </label>
          </div>
          <div className="modal-form-field">
            <label className="form-label">
              Author Last Name: <input type="text" value={this.state.author_lname} onChange={this.authorLNameChange} className="modal-form-input"/>
            </label>
          </div>
          <div className="form-errors-div">
            { this.fieldErrors("base") }
          </div>
          <input type="submit" value="Update Book" className="small-button"/>
        </form>
      );
    } else {
      return (<div/>);
    }
  }
});

module.exports = BookEdit;
