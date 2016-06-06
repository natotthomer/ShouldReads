var React = require('react');
var Link = require('react-router').Link;

var ClientActions = require('./../actions/client_actions');
var SessionStore = require('./../stores/session_store');
var BookStore = require('./../stores/book_store');

var BookIndexItem = require('./BookIndexItem');
var BookShow = require('./BookShow');

var BookIndex = React.createClass({

  getInitialState: function () {
    if (this.props.books) {
      return ({ books: this.props.books });
    } else {
      return ({ books: [] });
    }
  },

  componentDidMount: function () {
    this.bookListener = BookStore.addListener(this.getBooks);
    ClientActions.fetchBooks();
  },

  componentWillUnmount: function () {
    this.bookListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ books: newProps.books });
  },

  getBooks: function (){
    if (this.props.books) {
      this.setState({ books: this.props.books });
    } else {
      this.setState({ books: [] });
    }
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
