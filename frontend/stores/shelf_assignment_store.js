var AppDispatcher = require('./../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var ShelfAssignmentConstants = require('./../constants/shelf_assignment_constants');

var ShelfAssignmentStore = new Store(AppDispatcher);

var _shelfAssignments = {};

var resetShelfAssignments = function (shelfAssignments) {
  _shelfAssignments = {};
  shelfAssignments.forEach(function (shelfAssignment) {
    _shelfAssignments[shelfAssignment.id] = shelfAssignment;
  });
};

var setShelfAssignment = function (shelfAssignment) {
  _shelfAssignments[shelfAssignment.id] = shelfAssignment;
};

var removeShelfAssignment = function (shelfAssignment) {
  delete _shelfAssignments[shelfAssignment.id];
};

ShelfAssignmentStore.find = function (id) {
  return _shelfAssignments[id];
};

ShelfAssignmentStore.all = function () {
  return Object.keys(_shelfAssignments).map(function (shelfAssignmentId) {
    return _shelfAssignments[shelfAssignmentId];
  });
};

ShelfAssignmentStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ShelfAssignmentConstants.SHELF_ASSIGNMENTS_RECEIVED:
      resetShelfAssignments(payload.shelfAssignments);
      this.__emitChange();
      break;
    case ShelfAssignmentConstants.SHELF_ASSIGNMENT_RECEIVED:
      setShelfAssignment(payload.shelfAssignment);
      this.__emitChange();
      break;
    case ShelfAssignmentConstants.SHELF_ASSIGNMENT_REMOVED:
      removeShelfAssignment(payload.shelfAssignment);
      this.__emitChange();
      break;
  }
};

module.exports = ShelfAssignmentStore;
