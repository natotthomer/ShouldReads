var React = require('react');
var SessionStore = require('./../stores/session_store');
var ErrorStore = require('./../stores/error_store');
var ClientActions = require('./../actions/client_actions');
var ShelfStore = require('./../stores/shelf_store.js');

var ShelfEdit = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    var shelf = ShelfStore.find(this.props.shelf.id);
    return ({
      title: shelf.title,
      description: shelf.description,
      id: shelf.id,
      user_id: shelf.user_id
    });
  },

  componentDidMount: function () {
    this.shelfListener = ShelfStore.addListener(this.getShelf);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    ClientActions.fetchShelf(this.props.shelf.id);
  },

  componentWillUnmount: function () {
    this.shelfListener.remove();
    this.errorListener.remove();
  },

  getShelf: function () {
    var shelf = ShelfStore.find(this.props.shelf.id);
    this.setState({
      title: shelf.title,
      description: shelf.description,
      id: shelf.id,
      user_id: shelf.user_id
    });
  },

  titleChange: function (e) {
    this.setState({ title: e.target.value });
  },

  descriptionChange: function (e) {
    this.setState({ description: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var shelfData = {
      title: this.state.title,
      description: this.state.description,
      id: this.state.id,
      user_id: this.state.user_id
    };
    ClientActions.updateShelf(shelfData, this.props.onModalClose);
  },

  redirectToShelf: function (shelfId) {
    this.context.router.push("shelves/" + shelfId);
  },

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors("shelfedit");
    if (!errors[field]) { return; }
    var messages = errors[field][0]

    return <div>{ messages }</div>;
  },

  render: function () {
    if (this.state.title === undefined) {
      return (<div/>);
    }
    if (SessionStore.isUserLoggedIn()) {
      return (
        <form className="modal-form" onSubmit={this.handleSubmit}>
          <h1 className="modal-header">Edit Shelf</h1><br/><br/>
          <div className="modal-form-field">
            <label>
              Title: <input type="text" value={this.state.title} onChange={this.titleChange} className="modal-form-input"/>
            </label>
          </div>
          <div className="modal-form-field">
            <label>
              Description: <textarea value={this.state.description} onChange={this.descriptionChange} className="modal-form-input"/>
            </label>
          </div>
          <div className="form-errors-div">
            { this.fieldErrors("base") }
          </div>
          <input type="submit" value="Update Shelf" className="small-button"/>
        </form>
      );
    } else {
      return (<div/>);
    }
  }
});

module.exports = ShelfEdit;
