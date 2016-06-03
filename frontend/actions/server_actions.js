var AppDispatcher = require('./../dispatcher/dispatcher');
var BookConstants = require('./../constants/book_constants');
var ShelfConstants = require('./../constants/shelf_constants');

var ServerActions = {
  receiveAllBooks: function (books) {
    AppDispatcher.dispatch({
      actionType: BookConstants.BOOKS_RECEIVED,
      books: books
    });
  },

  receiveSingleBook: function (book) {
    AppDispatcher.dispatch({
      actionType: BookConstants.BOOK_RECEIVED,
      book: book
    });
  },

  receiveAllShelves: function (shelves) {
    AppDispatcher.dispatch({
      actionType: ShelfConstants.SHELVES_RECEIVED,
      shelves: shelves
    });
  },

  receiveSingleShelf: function (shelf) {
    AppDispatcher.dispatch({
      actionType: ShelfConstants.SHELF_RECEIVED,
      shelf: shelf
    });
  }
};

module.exports = ServerActions;
