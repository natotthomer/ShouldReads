var AppDispatcher = require('../dispatcher/dispatcher');
var BookConstants = require('../constants/book_constants');

var ApiActions = {
  receiveAll: function(books){
    AppDispatcher.dispatch({
      actionType: BookConstants.BOOKS_RECEIVED,
      books: books
    });
  },
  receiveSingleBench: function(book){
    AppDispatcher.dispatch({
      actionType: BookConstants.BOOK_RECEIVED,
      book: book
    });
  }
};

module.exports = ApiActions;
