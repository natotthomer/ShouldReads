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

  createBook: function (data, redirectToBook) {
    $.ajax({
      url: "api/books",
      type: "POST",
      data: { book: data },
      success: function (book) {
        ServerActions.receiveSingleBook(book);
        redirectToBook(book.id);
      }
    });
  },

  removeBook: function (id, redirectToHome) {
    $.ajax({
      url: "api/books/" + id,
      type: "DELETE",
      success: function (book) {
        ServerActions.removeBook(book);
        redirectToHome();
      }
    });
  },

  updateBook: function (data, onModalClose) {
    $.ajax({
      url: "api/books/" + data.id,
      type: "PATCH",
      data: { book: { title: data.title, author_fname: data.author_fname, author_lname: data.author_lname }},
      success: function (book) {
        ServerActions.receiveSingleBook(book);
        onModalClose();
      }
    });
  },

  updateBookStatus: function (data, onModalClose) {
    $.ajax({
      url: "api/books/" + data.id + "/status",
      type: "PATCH",
      data: { book: { status: data.status }},
      success: function (book) {
        ServerActions.receiveSingleBook(book);
        onModalClose();
      }
    });
  },

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
  },

  updateShelf: function (data, onModalClose) {
    $.ajax({
      url: "api/shelves/" + data.id,
      type: "PATCH",
      data: { shelf: { title: data.title, description: data.description } },
      success: function (shelf) {
        ServerActions.receiveSingleShelf(shelf);
        onModalClose();
      }
    });
  },

  removeShelf: function (id, redirectToHome) {
    $.ajax({
      url: "api/shelves/" + id,
      type: "DELETE",
      success: function (shelf) {
        ServerActions.removeShelf(shelf);
        if (!!redirectToHome) {
          redirectToHome();
        }
      }
    });
  },

  fetchShelfAssignments: function () {
    $.ajax({
      url: "api/shelf_assignments",
      success: function (shelfAssignments) {
        ServerActions.receiveAllShelfAssignments(shelfAssignments);
      }
    });
  },

  fetchShelfAssignment: function (id) {
    $.ajax({
      url: "api/shelf_assignments/" + id,
      success: function (shelfAssignment) {
        ServerActions.receiveSingleShelfAssignment(shelfAssignment);
      }
    });
  },

  createShelfAssignment: function (data) {
    // debugger;
    $.ajax({
      url: "api/shelf_assignments",
      type: "POST",
      data: { shelf_assignment: data },
      success: function (shelfAssignment) {
        ServerActions.receiveSingleShelfAssignment(shelfAssignment);
      }
    });
  },

  removeShelfAssignment: function (id, redirectToHome) {
    $.ajax({
      url: "api/shelf_assignments/" + id,
      type: "DELETE",
      success: function (shelfAssignment) {
        ServerActions.removeShelfAssignment(shelfAssignment);
      }
    });
  }
};

module.exports = ApiUtil;
