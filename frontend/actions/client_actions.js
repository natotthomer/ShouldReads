var ApiUtil = require('../util/api_util');

var ClientActions = {
  fetchBooks: ApiUtil.fetchBooks,
  fetchBook: ApiUtil.fetchBook,
  createBook: ApiUtil.createBook,
  fetchShelves: ApiUtil.fetchShelves,
  fetchShelf: ApiUtil.fetchShelf,
  createShelf: ApiUtil.createShelf
};

module.exports = ClientActions;
