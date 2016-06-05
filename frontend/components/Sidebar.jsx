var React = require('react');
var Link = require('react-router').Link;

var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var ShelfIndex = require('./ShelfIndex');

var Sidebar = React.createClass({

  render: function () {
    return (
      <div className="sidebar-main">
        <ShelfIndex/>
      </div>
    );
  }

});

module.exports = Sidebar;
