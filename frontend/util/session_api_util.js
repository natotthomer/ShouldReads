var SessionActions = require('./../actions/session_actions.js');

var SessionApiUtil = {
  login: function (credentials) {
    $.ajax({
      url: "/api/session",
      type: "POST",
      data: { user: credentials },
      success: function (currentUser) {
        console.log("Login success ()");
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {
        console.log("Login error");
        var errors = xhr.responseJSON;
        // ErrorActions.setErrors("login", errors);
      }
    });
  },

  logout: function () {
    $.ajax({
      url: "/api/session",
      type: "DELETE",
      success: function () {
        console.log("Logout success");
        SessionActions.removeCurrentUser();
      },
      error: function () {
        console.log("Logout error");

      }
    });
  },

  fetchCurrentUser: function() {
    $.ajax({
      url: "api/session",
      type: "GET",
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {
        console.log("Fetch error");
      }
    });
  }
};

module.exports = SessionApiUtil;
