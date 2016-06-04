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
    var shelf = ShelfStore.find(this.props.params.shelfId);
    debugger;
    return ({
      title: shelf.title,
      description: shelf.description,
      id: shelf.id,
      user_id: shelf.user_id
    });
  },

  componentDidMount: function () {
    this.shelfListener = ShelfStore.addListener(this.getShelf);
    ClientActions.fetchShelf(this.props.params.shelfId);
  },

  componentWillUnmount: function () {
    this.shelfListener.remove();
  },

  getShelf: function () {
    var shelf = ShelfStore.find(this.props.params.shelfId);
    this.setState({
      title: shelf.title,
      description: shelf.description,
      id: shelf.id,
      user_id: shelf.user_id
    });
  },

  titleChange: function (e) {
    debugger;
    this.setState({ title: e.target.value });
  },

  descriptionChange: function (e) {
    this.setState({ description: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var shelfData = {
      title: this.statetitle,
      description: this.state.description,
      id: this.state.id,
      user_id: this.state.user_id,
    };
    ClientActions.updateShelf(shelfData, this.redirectToShelf);
  },

  redirectToShelf: function (shelfId) {
    this.context.router.push("shelves/" + shelfId);
  },

  render: function () {
    if (this.state.shelf === undefined) {
      return (<div/>);
    }

    return (
      <div>
        <form className="shelf-form" onSubmit={this.handleSubmit}>
          <h1>Edit Shelf</h1><br/><br/>
          Title: <input type="text" value={this.state.title} onChange={this.titleChange}/>
          <br/>
          Description: <textarea value={this.state.description} onChange={this.descriptionChange}/>
          <br/><br/>
          <input type="submit" value="Update Shelf"/>
        </form>
      </div>
    );
  }
});

module.exports = ShelfEdit;
