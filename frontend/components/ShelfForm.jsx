var React = require('react');
var SessionStore = require('./../stores/session_store');
var ErrorStore = require('./../stores/error_store');
var ClientActions = require('./../actions/client_actions');
var ShelfStore = require('./../stores/shelf_store');

var ShelfForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    debugger;
    return ({ title: "", description: "", user: SessionStore.currentUser().id });
  },

  titleChange: function (e) {
    var newTitle = e.target.value;
    this.setState({ title: newTitle });
  },

  descriptionChange: function (e) {
    var newDescription = e.target.value;
    this.setState({ description: newDescription });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var shelfData = {
      title: this.state.title,
      description: this.state.description,
      user_id: SessionStore.currentUser().id,
    };
    ClientActions.createShelf(shelfData, this.redirectToShelves);
  },

  redirectToShelves: function (shelfId) {
    this.context.router.push("shelves/" + shelfId);
  },

  render: function () {
    return (
      <div>
        <form className="shelf-form" onSubmit={this.handleSubmit}>
          <h1>Create a new Shelf</h1><br/><br/>
          Title: <input type="text" value={this.state.title} onChange={this.titleChange}/>
          <br/>
          Description: <textarea value={this.state.description} onChange={this.descriptionChange}/>
          <br/><br/>
          <input type="submit" value="Create Shelf"/>
        </form>
      </div>
    );
  }
});

module.exports = ShelfForm;
