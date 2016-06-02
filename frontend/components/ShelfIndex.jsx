var React = require('react');
var ShelfStore = require('./../stores/shelf_store');
var ShelfIndexItem = require('./ShelfIndexItem');
var ClientActions = require('./../actions/client_actions');



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
    return (
      <div className="shelf-index">
        My Shelves <br/><br/>
        <ul>
          {
            this.state.shelves.map(function (shelf) {
              return (<ShelfIndexItem key={shelf.id} shelf={shelf}/>);
            })
          }
          {this.props.children}
        </ul>
      </div>
    );
  }
});

module.exports = ShelfIndex;
