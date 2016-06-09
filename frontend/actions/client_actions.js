var ApiUtil = require('../util/api_util');

var ClientActions = {
  fetchBooks: function () {
    ApiUtil.fetchBooks();
  },
  fetchBook: function (id) {
    ApiUtil.fetchBook(id);
  },
  createBook: function (data, redirectToBook) {
    ApiUtil.createBook(data, redirectToBook);
  },
  removeBook: function (id, redirectToHome) {
    ApiUtil.removeBook(id, redirectToHome);
  },
  updateBook: function (data, onModalClose) {
    ApiUtil.updateBook(data, onModalClose);
  },
  updateBookStatus: function (data, onModalClose) {
    ApiUtil.updateBookStatus(data, onModalClose);
  },

  fetchShelves: function () {
    ApiUtil.fetchShelves();
  },
  fetchShelf: function (id) {
    ApiUtil.fetchShelf(id);
  },
  createShelf: function (data, redirectToShelf) {
    ApiUtil.createShelf(data, redirectToShelf);
  },
  removeShelf: function (id) {
    ApiUtil.removeShelf(id);
  },
  updateShelf: function (data, onModalClose) {
    ApiUtil.updateShelf(data, onModalClose);
  },

  fetchShelfAssignments: function () {
    ApiUtil.fetchShelfAssignments();
  },
  fetchShelfAssignment: function (id) {
    ApiUtil.fetchShelfAssignment(id);
  },
  createShelfAssignment: function (data) {
    ApiUtil.createShelfAssignment(data);
  },
  removeShelfAssignment: function (id) {
    ApiUtil.removeShelfAssignment(id);
  },
  updateShelfAssignment: function (data, onModalClose) {
    ApiUtil.updateShelfAssignment(data, onModalClose);
  }
};

module.exports = ClientActions;
