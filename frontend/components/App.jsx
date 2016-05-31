var React = require('react');
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');

var App = React.createClass({
  componentDidMount: function () {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },
  render: function () {
    return (
      <div>
        <header>
          <h1>ShouldReads</h1>

        </header>
        {this.props.children}
      </div>
    )
  }
})
