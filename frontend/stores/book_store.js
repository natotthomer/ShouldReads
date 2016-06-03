var AppDispatcher = require('./../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var BookConstants = require('./../constants/book_constants');

var BookStore = new Store(AppDispatcher);

var _books = {};

var resetBooks = function (books) {
  _books = {};

  books.forEach(function (book) {
    _books[book.id] = book;
  });
};

var setBook = function (book) {
  _books[book.id] = book;
};

var removeBook = function (book) {
  delete _books[book.id];
};

BookStore.find = function (id) {
  return _books[id];
};

BookStore.all = function () {
  return Object({}, _books);
};

BookStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BookConstants.BOOKS_RECEIVED:
      resetBooks(payload.books);
      break;
    case BookConstants.BOOK_RECEIVED:
      setBook(payload.book);
      break;
    case BookConstants.BOOK_REMOVED:
      removeBook(payload.book);
      break;
  }
  this.__emitChange();
};

module.exports = BookStore;
