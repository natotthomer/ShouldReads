var ApiUtil = require('../util/api_util');

var ClientActions = {
  fetchBooks: ApiUtil.fetchBooks,
  createBook: ApiUtil.createBook,
};

module.exports = ClientActions;
