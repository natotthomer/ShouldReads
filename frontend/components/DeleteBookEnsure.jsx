var React = require('react');

var DeleteBookEnsure = React.createClass({

  render: function () {
    return (
      <div className="delete-form-main">
        <h3>Are you sure you want to delete this book??</h3>
        <button value="Yes" onClick={this.props.removeBook()}/>
        <button value="No"/>
      </div>
    );
  }
});

module.exports = DeleteBookEnsure;
