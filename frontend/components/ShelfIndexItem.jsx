var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('./../actions/client_actions');
var hashHistory = require('react-router').hashHistory;

var ShelfIndexItem = React.createClass({
  render: function () {
    var shelf = this.props.shelf;
    return (
      <li>
        <Link to={"shelves/"+shelf.id}>{shelf.title}</Link>
      </li>
    );
  }
});

module.exports = ShelfIndexItem;
