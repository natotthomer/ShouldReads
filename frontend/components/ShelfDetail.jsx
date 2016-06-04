var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var ClientActions = require('./../actions/client_actions');

var ShelfStore = require('./../stores/shelf_store');
var ShelfIndex = require('./ShelfIndex');
var ShelfIndexItem = require('./ShelfIndexItem');
var BookIndex = require('./BookIndex');

var ShelfDetail = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return ({ shelf: ShelfStore.find(this.props.shelfId) });
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ shelf: ShelfStore.find(newProps.shelfId) });
  },

  componentDidMount: function () {
    this.shelfListener = ShelfStore.addListener(this.getShelf);
    ClientActions.fetchShelf(this.props.shelfId);
  },

  componentWillUnmount: function () {
    this.shelfListener.remove();
  },

  getShelf: function () {
    this.setState({ shelf: ShelfStore.find(this.props.shelfId)});
  },

  removeShelf: function () {
    ClientActions.removeShelf(this.props.shelfId, this.redirectToHome);
  },

  redirectToHome: function () {
    this.context.router.push("/");
  },

  updateShelf: function () {
    this.context.router.push("/shelves/" + this.props.shelfId + "/edit");
  },

  render: function () {
    if (!SessionStore.currentUserHasBeenFetched() || this.state.shelf === undefined) {
      return (<div/>);
    }

    return (
      <div className="shelf-detail">
        <div className="shelf-header clearfix">
          <div className="shelf-detail-title">{this.state.shelf.title}</div>
          <form onSubmit={this.removeShelf} className="update-delete-shelf">
            <input type="submit" className="shelf-button" value="delete this shelf"/>
          </form>
          <form className="update-delete-shelf">
          </form>
          <form onSubmit={this.updateShelf} className="update-delete-shelf">
            <input type="submit" className="shelf-button" value="edit this shelf"/>
          </form>
        </div>
        <div className="shelf-description">{this.state.shelf.description}</div> <br/>
        <BookIndex books={this.state.shelf.books}/>
      </div>
    );
    // {this.state.shelf.books}
  }
});

module.exports = ShelfDetail;
