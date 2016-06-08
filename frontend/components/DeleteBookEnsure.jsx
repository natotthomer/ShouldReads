var React = require('react');

var DeleteBookEnsure = React.createClass({

  render: function () {
    return (
      <div className="delete-form-main">
        <h3>Are you sure you want to delete this book??</h3><br/><br/>
        <button onClick={this.props.removeBook} className="login-button">Yes</button> &nbsp;
        <button onClick={this.props.onModalClose} className="login-button">No</button>
      </div>
    );
  }
});

module.exports = DeleteBookEnsure;
