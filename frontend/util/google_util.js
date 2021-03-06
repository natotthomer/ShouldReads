
var GoogleUtil = {
  fetchBookInfo: function (formData, createBook) {
    var parsedTitle = encodeURI(formData.title);
    var parsedAuthor = encodeURI(formData.author_fname) + "%20" + encodeURI(formData.author_lname);
    $.ajax({
      type: "GET",
      url: "https://www.googleapis.com/books/v1/volumes?q=" + parsedTitle + "+inauthor:" + parsedAuthor + "&key=AIzaSyB0KVi7_ciJbBdMkHaTmC5qFLePxyJ3iQQ",
      success: function (newData) {
        book = newData.items[0].volumeInfo;

        if (book.imageLinks === undefined) {
          formData.cover = "https://s3.amazonaws.com/shouldreads-dev/fancy_cover.jpg";
        }
        debugger;
        formData.description = newData.items[0].volumeInfo.description;
        formData.cover = newData.items[0].volumeInfo.imageLinks.smallThumbnail;

        createBook(formData);
      },
      error: function (newData) {
      }
    });
  }
};

module.exports = GoogleUtil;
