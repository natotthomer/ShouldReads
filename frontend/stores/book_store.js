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

BookStore.sixRandomBooks = function () {
  var six = [];
  for(var i = 0; i < 6; i++) {
    six.push(_books[Math.floor(Math.random() * _books.length)]);
  }
  debugger;
};

BookStore.find = function (id) {
  return _books[id];
};

BookStore.all = function () {
  return Object.keys(_books).map(function (bookId) {
    return _books[bookId];
  });
};

BookStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BookConstants.BOOKS_RECEIVED:
      resetBooks(payload.books);
      this.__emitChange();
      break;
    case BookConstants.BOOK_RECEIVED:
      setBook(payload.book);
      this.__emitChange();
      break;
    case BookConstants.BOOK_REMOVED:
      removeBook(payload.book);
      this.__emitChange();
      break;
  }
};

module.exports = BookStore;
window.BookStore = BookStore;
