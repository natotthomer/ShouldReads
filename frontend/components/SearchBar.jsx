var React = require('react');

var SearchBar = React.createClass({
  getInitialState: function () {
    return ({ inputVal: "" });
  },

  handleInput: function (e) {
    this.setState({ inputVal: e.currentTarget.value });
  },

  matches: function () {
    var matches = [];

    if (this.state.inputVal.length === 0) {
      return this.props.books;
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"/>
        </form>
      </div>
    );
  }
});

module.exports = SearchBar;
