var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var ClientActions = require('./../actions/client_actions');

var BookStore = require('./../stores/book_store');
var BookIndexItem = require('./BookIndexItem');

var BookShow = React.createClass({
  render: function () {
    return (
      <div>in bookshow</div>
    );
  }
});

module.exports = BookShow;
