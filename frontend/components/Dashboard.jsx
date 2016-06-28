var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var BookStore = require('./../stores/book_store');
var SessionApiUtil = require('./../util/session_api_util');
var Sidebar = require('./Sidebar');
var BookIndex = require('./BookIndex');

var Dashboard = React.createClass({
  // 
  // getInitialState: function () {
  //   return ({ shelves: [], user: {} });
  // },
  //
  // componentDidMount: function () {
  // },

  render: function () {
    return (
      <div className="clearfix">
        <h1 className="dashboard-main">{this.props.user.username}'s Dashboard</h1>
        <Sidebar/>
      </div>
    );
  }
  // <BookIndex/>

});

module.exports = Dashboard;
