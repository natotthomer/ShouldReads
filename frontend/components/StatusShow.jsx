var React = require('react');
var Sidebar = require('./Sidebar');
var BookIndex = require('./BookIndex');
var ShelfIndex = require('./ShelfIndex');

var StatusShow = React.createClass({
  render: function () {
    return(
      <div>
        <div className="shelf-index-left">
          <ShelfIndex/>


        </div>
      </div>
    )
  }
});

module.exports = StatusShow;
