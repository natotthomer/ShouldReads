var React = require('react');
var Link = require('react-router').Link;
var Modal = require('react-modal');
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var ClientActions = require('./../actions/client_actions');

var BookStore = require('./../stores/book_store');
var BookIndexItem = require('./BookIndexItem');
var BookEdit = require('./BookEdit');
var Sidebar = require('./Sidebar');
var DeleteBookEnsure = require('./DeleteBookEnsure');
var BookStatusEdit = require('./BookStatusEdit');
var AddBookToShelf = require('./AddBookToShelf');

var modalStyle = require('./../constants/modal_style_constants');

var BookShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return ({ book: BookStore.find(this.props.params.bookId),
              modalOpen: false,
              modalSelect: "delete"
            });
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
    this.setState({ book: BookStore.find(this.props.params.bookId) });
  },

  removeBook: function (e) {
    e.preventDefault();
    ClientActions.removeBook(this.props.params.bookId, this.redirectToHome);
  },

  redirectToHome: function () {
    this.context.router.push("/");
  },

  __handleClick: function (modalType, e){
    e.preventDefault();
    this.setState({
      modalOpen: true,
      modalSelect: modalType
    });
  },

  onModalClose: function () {
    this.setState({ modalOpen: false });
  },

  getBookStatus: function () {
    if (this.state.book && this.state.book.status) {
      return this.state.book.status;
    } else {
      return "Want to Read?";
    }
  },

  getModal: function () {
    var user = SessionStore.currentUser();
    if (this.state.modalSelect === "delete") {
      return <DeleteBookEnsure removeBook={this.removeBook} onModalClose={this.onModalClose}/>;
    } else if (this.state.modalSelect === "edit") {
      return <BookEdit book={this.state.book} onModalClose={this.onModalClose}/>;
    } else if (this.state.modalSelect === "shelf") {
      return (<AddBookToShelf book={this.state.book}
          user={user}
          onModalClose={this.onModalClose}/>);
    } else {
      return (<BookStatusEdit
          book={this.state.book}
          onModalClose={this.onModalClose}/>);
    }
  },

  render: function () {
    if (!SessionStore.currentUserHasBeenFetched() || this.state.book === undefined) {
      return (<div/>);
    }
    return (
      <div className="book-show clearfix">
        <div className="book-detail clearfix left">
          <div className="book-cover left">
            <img src={this.state.book.cover_url}/>
          </div>
          <div className="book-details clearfix left">
            <div className="book-show-title left">
              {this.state.book.title}
            </div>
            <form className="right">
              <button onClick={this.__handleClick.bind(this, "delete")} className="book-button">
                delete this book
              </button>
              &nbsp;
              <button onClick={this.__handleClick.bind(this, "edit")} className="book-button">
                edit this book
              </button>
              <br/>
              <div className="book-status-buttons">
                <button className="add-book-button" onClick={this.__handleClick.bind(this, "status")}>
                  {this.getBookStatus()}
                </button> <br/>
                <button className="add-book-button" onClick={this.__handleClick.bind(this, "shelf")}>
                  Add to my Shelves
                </button>
              </div>
            </form><br/><br/>
            <div className="left">
              <a href="">{this.state.book.author_fname + " " + this.state.book.author_lname}</a>
            </div><br/><br/>
            <blockquote className="book-description">
              {this.state.book.description}
            </blockquote>
          </div>

        </div><br/><br/>
        <Sidebar />
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={modalStyle}>
          <button onClick={this.onModalClose} className="modal-close left"><strong>X</strong></button>
          {this.getModal()}
        </Modal>
      </div>
    );
  }
});

module.exports = BookShow;
