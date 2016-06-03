var ApiUtil = require('../util/api_util');

var ClientActions = {
  fetchBooks: ApiUtil.fetchBooks,
  fetchBook: ApiUtil.fetchBook,
  createBook: ApiUtil.createBook,
  fetchShelves: ApiUtil.fetchShelves,
  fetchShelf: ApiUtil.fetchShelf
};

module.exports = ClientActions;
