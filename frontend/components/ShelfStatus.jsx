var React = require('react');
var ClientActions = require('./../actions/client_actions');
// var SessionStore = require('./../stores/session_store');
var ShelfStore = require('./../stores/shelf_store');
var ShelfAssignmentStore = require('./../stores/shelf_assignment_store');

var ShelfStatus = React.createClass({

  getInitialState: function () {
    return ({ shelf: ShelfStore.find(this.props.shelf.id) });
  },

  toRender: function () {
    var inner = "☐ " + this.props.shelf.title;

    if (this.hasBook()) {
      inner = "☑ " + this.props.shelf.title;
    }

    return inner;
  },

  hasBook: function () {
    return this.props.shelf.books.forEach(function (book) {
      if (book.id === this.props.book.id) {
        return true;
      } else {
        return false;
      }
    }.bind(this));
  },

  componentDidMount: function () {
    this.shelfListener = ShelfStore.addListener(this.getShelves);
    ClientActions.fetchShelves();
  },

  componentWillUnmount: function () {
    this.shelfListener.remove();
  },

  getShelves: function () {
    this.setState({ shelf: ShelfStore.find(this.props.shelf.id) });
  },

  __handleChange: function (e) {
    e.preventDefault();
    // debugger;
    var shelfAssignmentData = {
      shelf_id: this.state.shelf.id,
      book_id: this.props.book.id
    };
    if (this.hasBook()) {
      ClientActions.removeShelfAssignment(shelfAssignmentData);
    } else {
      ClientActions.createShelfAssignment(shelfAssignmentData);
    }
  },

  render: function () {
    return (
      <li className="shelf-select-item">
        <div onClick={this.__handleChange}>
          {this.toRender()}
        </div>
      </li>
    );
  }
});

module.exports = ShelfStatus;
