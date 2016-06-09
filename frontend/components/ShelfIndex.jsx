var React = require('react');
var Link = require('react-router').Link;

var ClientActions = require('./../actions/client_actions');
var SessionStore = require('./../stores/session_store');
var ShelfStore = require('./../stores/shelf_store');

var ShelfIndexItem = require('./ShelfIndexItem');

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
          <ul className="status-index">
            <li> <a href="#/books/want">Want to Read</a></li>
            <li> <a href="#/books/currently">Currently Reading</a></li>
            <li> <a href="#/books/read">Read </a></li>
          </ul><br/>

          <ul>
            {
              this.state.shelves.map(function (shelf) {
                return (<ShelfIndexItem key={shelf.id} shelf={shelf}/>);
              })
            }
          </ul><br/><br/>
          <Link to={"shelves/new"}>create a new shelf...</Link>

        </div>
      );
    } else {
      return (<div/>)
    }
  }
});

module.exports = ShelfIndex;
