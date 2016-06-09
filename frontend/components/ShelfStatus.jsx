var React = require('react');
var ClientActions = require('./../actions/client_actions');
var ShelfStore = require('./../stores/shelf_store');

var ShelfStatus = React.createClass({

  shelfAssignmentId: [],

  toRender: function () {
    var inner = "☐ " + this.props.shelf.title;

    this.props.shelf.shelf_assignments.forEach(function (shelfAssignment) {
      if (shelfAssignment.book_id === this.props.book.id) {
        inner = "☑ " + this.props.shelf.title;
        this.shelfAssignmentId.push(shelfAssignment.id);
      }
    }.bind(this));

    return inner;
  },

  hasBook: function () {
    var result = false;
    this.props.shelf.shelf_assignments.forEach(function (shelf_assignment) {
      if (shelf_assignment.book_id === this.props.book.id) {
        result = true;
      }
    }.bind(this));
    return result;
  },

  __handleChange: function (e) {
    e.preventDefault();
    var shelfAssignmentData = {
      shelf_id: this.props.shelf.id,
      book_id: this.props.book.id
    };
    var iHasBook = this.hasBook();
    if (iHasBook) {
      ClientActions.removeShelfAssignment(this.shelfAssignmentId[0]);
      this.shelfAssignmentId = [];
    } else {
      ClientActions.createShelfAssignment(shelfAssignmentData);
    }
  },

  render: function () {
    if (this.props.shelf.shelf_assignments) {
      return (
        <li className="shelf-select-item">
          <div onClick={this.__handleChange}>
            {this.toRender()}
          </div>
        </li>
      );
    } else {
      return (<div/>);
    }
  }
});

module.exports = ShelfStatus;
