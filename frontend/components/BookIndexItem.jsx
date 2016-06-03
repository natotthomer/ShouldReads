var React = require('react');
var Link = require('react-router').Link;
var BookStore = require('./../stores/book_store');

var BookIndexItem = React.createClass({
  render: function () {
    return (
      <li><Link to="#">{this.props.book.title}</Link></li>
    );
  }
});

module.exports = BookIndexItem;
