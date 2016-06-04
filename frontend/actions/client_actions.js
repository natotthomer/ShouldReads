var ApiUtil = require('../util/api_util');

var ClientActions = {
  fetchBooks: function () {
    ApiUtil.fetchBooks();
  },
  fetchBook: function (id) {
    ApiUtil.fetchBook(id);
  },
  createBook: function (data) {
    ApiUtil.createBook(data);
  },

  fetchShelves: function () {
    ApiUtil.fetchShelves();
  },
  fetchShelf: function (id) {
    ApiUtil.fetchShelf(id);
  },
  createShelf: function (data) {
    ApiUtil.createShelf(data);
  },
  removeShelf: function (id) {
    ApiUtil.removeShelf(id);
  },
  updateShelf: function (data) {
    ApiUtil.updateShelf(data);
  }
};

module.exports = ClientActions;
