var React = require('react');
var ShelfStore = require('./../stores/shelf_store');
var ClientActions = require('./../actions/client_actions');
var Link = require('react-router').Link;

var ShelfShow = React.createClass({
  getInitialState: function () {
    var potentialShelf = ShelfStore.find(this.props.params.shelfId);
    return ({ shelf: potentialShelf ? potentialShelf : {} });
  },

  componentDidMount: function () {
    this.shelfListener = ShelfStore.addListener(this.handleChange);
    ClientActions.fetchShelf(this.props.params.shelfId);
  },

  componentWillUnmount: function () {
    this.shelfListener.remove();
  },

  handleChange: function () {
    var potentialShelf = ShelfStore.find(this.props.params.shelfId);
    this.setState({ shelf: potentialShelf ? potentialShelf : {} });
  },

  render: function () {
    var shelf = this.state.shelf;
    return (
      <div>
        <h3>{shelf.title}</h3>
        <p>{shelf.description}</p>
        <ul>
          
        </ul>
        <Link to="/shelves">Back to all Shelves</Link>
      </div>
    );
  }
});

module.exports = ShelfShow;
