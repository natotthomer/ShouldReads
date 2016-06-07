var React = require('react');
var Link = require('react-router').Link;
var BookStore = require('./../stores/book_store');

var BookIndexItem = React.createClass({
  render: function () {

    var cover_path = this.props.book ? this.props.book.cover_url : this.props.book.cover_file_name;

    return (
      <li className="book-index-item left">
        <Link to={"books/" + this.props.book.id}>
          <div className="book-index-thumb">
            <img src={this.props.book.cover_url}/><br/>
          </div>
        </Link>
        <Link to={"books/" + this.props.book.id}>
          <div className="book-index-item-details">
            {this.props.book.title}
          </div>
        </Link>
      </li>
    );
  }
});

module.exports = BookIndexItem;
