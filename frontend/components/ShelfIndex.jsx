var React = require('react');
var ShelfStore = require('./../stores/shelf_store');
var Link = require('react-router').Link;
var ShelfIndexItem = require('./ShelfIndexItem');
var ClientActions = require('./../actions/client_actions');

var SessionStore = require('./../stores/session_store');

var ShelfIndex = React.createClass({
  getInitialState: function () {
    return ({ shelves: [] });
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
    if (SessionStore.currentUserHasBeenFetched()) {
      return (

        <div className="shelf-index">
          My Shelves <br/><br/>
          <ul>
            {
              this.state.shelves.map(function (shelf) {
                return (<ShelfIndexItem key={shelf.id} shelf={shelf}/>);
              })
            }
          </ul><br/><br/>
          <Link to={"shelves/new"}>create a new shelf</Link>

        </div>
      );
    } else {
      return (<div/>)
    }

  }
});

module.exports = ShelfIndex;
