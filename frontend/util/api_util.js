var ServerActions = require('./../actions/server_actions.js');

var ApiUtil = {
  fetchBooks: function () {
    $.ajax({
      url: "api/books",
      success: function (books) {
        ServerActions.receiveAllBooks(books);
      }
    });
  },

  fetchBook: function (id) {
    $.ajax({
      url: "api/books/" + id,
      success: function (book) {
        ServerActions.receiveSingleBook(book);
      }
    });
  },
  //
  // createBook: function (data) {
  //   $.ajax({
  //     url: "api/book",
  //     type: "POST",
  //     data: { book: data },
  //     success: function (book) {
  //       ServerActions.receiveBook(book);
  //     }
  //   });
  // },
  fetchShelves: function () {
    $.ajax({
      url: "api/shelves",
      success: function (shelves) {
        ServerActions.receiveAllShelves(shelves);
      }
    });
  },

  fetchShelf: function (id) {
    $.ajax({
      url: "api/shelves/" + id,
      success: function (shelf) {
        ServerActions.receiveSingleShelf(shelf);
      }
    });
  },

  createShelf: function (data, redirectToShelf) {
    $.ajax({
      url: "api/shelves/",
      type: "POST",
      data: { shelf: data },
      success: function (shelf) {
        ServerActions.receiveSingleShelf(shelf);
        redirectToShelf(shelf.id);
      }
    });
  }
};

module.exports = ApiUtil;
