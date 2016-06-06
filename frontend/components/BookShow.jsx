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

var modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    // position                   : 'absolute',
    top                        : '50%',
    left                       : '50%',
    transform                  : 'translateX(-50%) translateY(-50%)',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    width                      : '400px',
    height                     : '250px'
  }
};

var BookShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

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

  removeBook: function (e) {
    e.preventDefault();
    ClientActions.removeBook(this.props.params.bookId, this.redirectToHome);
  },

  redirectToHome: function () {
    this.context.router.push("/");
  },

  __handleUpdateClick: function (e){
    e.preventDefault();
    this.setState({ modalOpen: true });
  },

  onModalClose: function () {
    this.setState({ modalOpen: false });
  },

  render: function () {
    if (!SessionStore.currentUserHasBeenFetched() || this.state.book === undefined) {
      return (<div/>);
    }
    return (
      <div className="book-show">
        <div className="clearfix">
          <div className="book-cover left">
            <img src={this.state.book.cover_url}/>
          </div>
          <div className="book-details left clearfix">
            <div className="book-show-title left">
              {this.state.book.title}
            </div><br/><br/>
            <div className="left">
              <a href="">{this.state.book.author_fname + " " + this.state.book.author_lname}</a>
            </div>
          </div>
          <form className="right">
            <input type="submit" onClick={this.removeBook} className="small-button" value="delete this book"/>
            &nbsp;
            <input type="submit" onClick={this.__handleUpdateClick} className="small-button" value="edit this book"/>
          </form>

        </div><br/><br/>
        <Sidebar/>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={modalStyle}>
          <button onClick={this.onModalClose} className="left"><strong>X</strong></button>
          <BookEdit book={this.state.book} onModalClose={this.onModalClose}/>
        </Modal>
      </div>
    );
  }
});

module.exports = BookShow;
