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
    return ({ title: "", description: "", user: SessionStore.currentUser().id });
  },

  componentDidMount: function () {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
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
    ClientActions.createShelf(shelfData, this.redirectToShelf);
  },

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors("shelfadd");
    if (!errors[field]) { return; }
    var messages = errors[field][0]

    return <div>{ messages }</div>;
  },

  redirectToShelf: function (shelfId) {
    this.context.router.push("shelves/" + shelfId);
  },

  render: function () {
    return (
      <div>
        <form className="modal-form" onSubmit={this.handleSubmit}>
          <h1 className="modal-header">Create a new Shelf</h1><br/><br/>
          <div className="modal-form-field">
            <label>
              Title: <input type="text" value={this.state.title} onChange={this.titleChange} className="modal-form-input modal-shelf-title"/>
            </label>
          </div>
          <div className="modal-form-field">
            <label>
              Description: <textarea value={this.state.description} onChange={this.descriptionChange} className="modal-form-input modal-textarea"/>
            </label>
          </div>

          <div className="form-errors-div">
            { this.fieldErrors("base") }
          </div>
          <input type="submit" value="Create Shelf" className="small-button"/>
        </form>
      </div>
    );
  }
});

module.exports = ShelfForm;
