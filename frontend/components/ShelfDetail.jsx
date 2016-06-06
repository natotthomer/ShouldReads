var React = require('react');
var Link = require('react-router').Link;
var Modal = require('react-modal');

var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var ClientActions = require('./../actions/client_actions');

var ShelfStore = require('./../stores/shelf_store');
var ShelfIndex = require('./ShelfIndex');
var ShelfIndexItem = require('./ShelfIndexItem');
var BookIndex = require('./BookIndex');
var ShelfEdit = require('./ShelfEdit');

var modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    // position                   : 'absolute',
    top                        : '50%',
    left                       : '50%',
    transform                  : 'translateX(-50%) translateY(-50%)',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    width                      : '400px',
    height                     : '250px'
  }
};

var ShelfDetail = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return ({
      shelf: ShelfStore.find(this.props.shelfId),
      modalOpen: false
    });
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

  removeShelf: function (e) {
    e.preventDefault();
    ClientActions.removeShelf(this.props.shelfId, this.redirectToHome);
  },

  redirectToHome: function () {
    this.context.router.push("/#/");
  },

  updateShelf: function (e) {
    e.preventDefault();
    this.context.router.push("/shelves/" + this.props.shelfId + "/edit");
  },

  __handleDeleteClick: function (){
    this.setState({ modalOpen: true });
  },

  __handleUpdateClick: function (e){
    e.preventDefault();
    this.setState({ modalOpen: true });
  },

  onModalClose: function () {
    this.setState({ modalOpen: false });
  },

  render: function () {
    if (!SessionStore.currentUserHasBeenFetched() || this.state.shelf === undefined) {
      return (<div/>);
    }

    return (
      <div className="shelf-detail">
        <div className="shelf-header clearfix">
          <div className="shelf-detail-title">{this.state.shelf.title}</div>
          <form className="update-delete-shelf">
            <input type="submit" onClick={this.removeShelf} className="small-button" value="delete this shelf"/>
            &nbsp;
            <input type="submit" onClick={this.__handleUpdateClick} className="small-button" value="edit this shelf"/>
          </form>
        </div>
        <div className="shelf-description">{this.state.shelf.description}</div> <br/>
        <BookIndex books={this.state.shelf.books}/>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={modalStyle}>
          <button onClick={this.onModalClose}><strong>X</strong></button>
          <ShelfEdit shelf={this.state.shelf} onModalClose={this.onModalClose}/>
        </Modal>
      </div>
    );
  }
});

module.exports = ShelfDetail;
