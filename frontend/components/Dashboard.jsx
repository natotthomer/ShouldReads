var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var Sidebar = require('./Sidebar');

var Dashboard = React.createClass({

  getInitialState: function () {
    return ({ shelves: [], user: {}});
  },

  componentDidMount: function () {

  },

  render: function () {
    return (
      <div>
        <h1>in the dashboard</h1>
        <Sidebar/>
      </div>
    );
  }

});

module.exports = Dashboard;
