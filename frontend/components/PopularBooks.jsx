var React = require('react');

var PopularBooks = React.createClass({
  render: function () {
    return(
      <div className="popular-books">
        <div className="popular-books-title">
          Popular Books
        </div>
        <div className="book-index">

        </div>
      </div>
    );
  }
});

module.exports = PopularBooks;
