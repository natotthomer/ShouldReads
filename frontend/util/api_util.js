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
  }
};

module.exports = ApiUtil;
