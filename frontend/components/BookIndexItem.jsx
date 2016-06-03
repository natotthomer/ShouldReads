var React = require('react');
var Link = require('react-router').Link;
var BookStore = require('./../stores/book_store');

var BookIndexItem = React.createClass({
  render: function () {
    return (
      <li><Link to={"books/" + this.props.book.id}>{this.props.book.title}</Link></li>
    );
  }
});

module.exports = BookIndexItem;
