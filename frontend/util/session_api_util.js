var SessionActions = require('./../actions/session_actions.js');
var ErrorActions = require('./../actions/error_actions.js');

var SessionApiUtil = {
  login: function (credentials, callback) {
    $.ajax({
      url: "/api/session",
      type: "POST",
      data: { user: credentials },
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
        callback();
      },
      error: function (xhr) {
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("login", errors);
      }
    });
  },

  logout: function () {
    $.ajax({
      url: "/api/session",
      type: "DELETE",
      success: function () {
        SessionActions.removeCurrentUser();
      },
      error: function () {

      }
    });
  },

  fetchCurrentUser: function(callback) {
    $.ajax({
      url: "api/session",
      type: "GET",
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
        callback = callback || function () {};
        callback();
      },
      error: function (xhr) {
      }
    });
  }
};

module.exports = SessionApiUtil;
