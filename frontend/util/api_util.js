var ServerActions = require('./../actions/server_actions.js');

var ApiUtil = {
  fetchBooks: function () {
    $.ajax({
      url: "api/books",
      success: function (books) {
        ServerActions.receiveAll(books);
      }
    });
  }
};

module.exports = ApiUtil
