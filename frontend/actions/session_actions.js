var React = require('react');
var SessionStore = require('./../stores/session_store');
var AppDispatcher = require('./../dispatcher/dispatcher');
var SessionConstants = require('./../constants/session_constants');

var SessionActions = {
  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN
      currentUser: currentUser,
    });
  },

  removeCurrentUser: function () {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  }
};

module.exports = SessionActions;
