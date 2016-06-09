var React = require('react');
var Link = require('react-router').Link;
var Modal = require('react-modal');

var ClientActions = require('./../actions/client_actions');
var SessionStore = require('./../stores/session_store');
var ShelfStore = require('./../stores/shelf_store');

var ShelfIndexItem = require('./ShelfIndexItem');
var ShelfForm = require('./ShelfForm');

var modalStyle = require('./../constants/modal_style_constants');

var ShelfIndex = React.createClass({
  getInitialState: function () {
    return ({ shelves: [], modalOpen: false });
  },

  componentDidMount: function () {
    this.shelfListener = ShelfStore.addListener(this.getShelves);
    ClientActions.fetchShelves();
  },

  componentWillUnmount: function () {
    this.shelfListener.remove();
  },

  getShelves: function () {
    this.setState({ shelves: ShelfStore.all() });
  },

  __handleModalOpen: function () {
    this.setState({ modalOpen: true });
  },

  onModalClose: function () {
    this.setState({ modalOpen: false });
  },

  render: function () {
    if (SessionStore.currentUserHasBeenFetched()) {
      return (

        <div className="shelf-index">
          My Shelves <br/><br/>
          <ul className="status-index">
            <li> <a href="#/books/want">Want to Read</a></li>
            <li> <a href="#/books/currently">Currently Reading</a></li>
            <li> <a href="#/books/read">Read </a></li>
          </ul>
          <br/>
          <ul>
            {
              this.state.shelves.map(function (shelf) {
                return (<ShelfIndexItem key={shelf.id} shelf={shelf}/>);
              })
            }
          </ul><br/><br/>
          <button className="sidebar-new-shelf-button"onClick={this.__handleModalOpen} >
            create a new shelf...
          </button>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={modalStyle}>
            <button onClick={this.onModalClose} className="modal-close left"><strong>X</strong></button>
            <ShelfForm onModalClose={this.onModalClose}/>
          </Modal>
        </div>
      );
    } else {
      return (<div/>)
    }
  }
});

module.exports = ShelfIndex;
