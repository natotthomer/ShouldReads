var React = require('react');
var Link = require('react-router').Link;

var SessionStore = require('./../stores/session_store');
var BookStore = require('./../stores/book_store');

var BookIndexItem = require('./BookIndexItem');

var BookIndex = React.createClass({

  // getInitialState: function () {
  //   if (this.props.books) {
  //     return ({ books: this.props.books });
  //   } else {
  //     return ({ books: BookStore.all() });
  //   }
  // },
  //
  // componentDidMount: function () {
  //   this.bookListener = BookStore.addListener(this.getBooks);
  //   ClientActions.fetchBooks();
  // },
  //
  // componentWillUnmount: function () {
  //   this.bookListener.remove();
  // },
  //
  // componentWillReceiveProps: function (newProps) {
  //   this.setState({ books: newProps.books || BookStore.all() });
  // },
  //
  // getBooks: function (){
  //   if (this.props.books) {
  //     this.setState({ books: this.props.books });
  //   } else {
  //     this.setState({ books: BookStore.all() });
  //   }
  // },

  render: function () {
    if (SessionStore.currentUserHasBeenFetched()) {
      return (
        <div className="book-index">
          <ul className="clearfix">
            {
              this.props.books.map(function (book) {
                if (book) {
                  return (<BookIndexItem book={book} key={book.id}/>);
                } else {
                  return <div/>
                }
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
