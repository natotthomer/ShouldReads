var React = require('react');
var SessionStore = require('./../stores/session_store');
var ErrorStore = require('./../stores/error_store');
var ClientActions = require('./../actions/client_actions');
var BookStore = require('./../stores/shelf_store');

var BookForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return ({ title: "", author_fname: "", author_lname: ""});
  },

  titleChange: function (e) {
    var newTitle = e.target.value;
    this.setState({ title: newTitle });
  },

  authorFNameChange: function (e) {
    var newAuthorFName = e.target.value;
    this.setState({ author_fname: newAuthorFName });
  },

  authorLNameChange: function (e) {
    var newAuthorLName = e.target.value;
    this.setState({ author_lname: newAuthorLName });
  },
  //
  // coverUrlChange: function (e) {
  //   var newCoverUrl = e.target.value;
  //   this.setState({ cover_url: newCoverUrl });
  // },

  handleSubmit: function (e) {
    e.preventDefault();
    var bookData = {
      title: this.state.title,
      author_fname: this.state.author_fname,
      author_lname: this.state.author_lname,
      // cover_url: this.state.cover_url
    };
    ClientActions.createBook(bookData, this.redirectToBook);
  },

  redirectToBook: function (bookId) {
    this.props.onModalClose();
    this.context.router.push("books/" + bookId);
  },

  render: function () {
    return (
      <div>
        <form className="book-form" onSubmit={this.handleSubmit}>
        <h1>Add a new Book</h1><br/><br/>
        Title: <input type="text" value={this.state.title} onChange={this.titleChange}/>
        <br/>
        Author First Name: <textarea value={this.state.author_fname} onChange={this.authorFNameChange}/>
        <br/>
        Author Last Name: <textarea value={this.state.author_lname} onChange={this.authorLNameChange}/>
        <br/>
        Cover Image:
        <br/><br/>
        <input type="submit" value="Create Book"/>
        </form>
      </div>
    );
  }
});

module.exports = BookForm;
