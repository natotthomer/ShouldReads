var React = require('react');
var SessionStore = require('./../stores/session_store');
var ShelfStore = require('./../stores/shelf_store');
var ClientActions = require('./../actions/client_actions');

var ShelfStatus = require('./ShelfStatus');

var AddBookToShelf = React.createClass({

  getInitialState: function () {
    return ({ shelves: ShelfStore.all() });
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

  render: function () {
    if (this.state.shelves) {
      return (
        <div className="edit-main">
          <h3 className="modal-header">
            Add to your shelves
          </h3><br/>
          <ul className="add-book-to-shelves">
            {
              this.state.shelves.map(function (shelf) {
                return (<ShelfStatus shelf={shelf} key={shelf.id} book={this.props.book}/>);
              }.bind(this))
            }
          </ul>
          <br/>
          <button className="login-button" onClick={this.props.onModalClose}>
            Done
          </button>
        </div>
      );
    } else {
      return (<div/>);
    }
  }
});

module.exports = AddBookToShelf;
