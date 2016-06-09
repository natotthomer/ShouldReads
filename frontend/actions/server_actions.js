var AppDispatcher = require('./../dispatcher/dispatcher');
var BookConstants = require('./../constants/book_constants');
var ShelfConstants = require('./../constants/shelf_constants');
var ShelfAssignmentConstants = require('./../constants/shelf_assignment_constants');

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

  removeBook: function (book) {
    AppDispatcher.dispatch({
      actionType: BookConstants.BOOK_REMOVED,
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
  },

  removeShelf: function (shelf) {
    AppDispatcher.dispatch({
      actionType: ShelfConstants.SHELF_REMOVED,
      shelf: shelf
    });
  },

  receiveAllShelfAssignments: function (shelfAssignments) {
    AppDispatcher.dispatch({
      actionType: ShelfAssignmentConstants.SHELF_ASSIGNMENTS_RECEIVED,
      shelfAssignments: shelfAssignments
    });
  },

  receiveSingleShelfAssignment: function (shelfAssignment) {
    AppDispatcher.dispatch({
      actionType: ShelfAssignmentConstants.SHELF_ASSIGNMENT_RECEIVED,
      shelfAssignment: shelfAssignment
    });
  },

  removeShelfAssignment: function (shelfAssignment) {
    AppDispatcher.dispatch({
      actionType: ShelfAssignmentConstants.SHELF_ASSIGNMENT_REMOVED,
      shelfAssignment: shelfAssignment
    });
  }
};

module.exports = ServerActions;
