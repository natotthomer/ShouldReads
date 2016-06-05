var AppDispatcher = require('./../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var ShelfConstants = require('./../constants/shelf_constants');

var ShelfStore = new Store(AppDispatcher);

var _shelves = {};

var resetShelves = function (shelves) {
  _shelves = {};
  shelves.forEach(function (shelf) {
    _shelves[shelf.id] = shelf;
  });
};

var setShelf = function (shelf) {
  _shelves[shelf.id] = shelf;
};

var removeShelf = function (shelf) {
  delete _shelves[shelf.id];
};

ShelfStore.find = function (id) {
  return _shelves[id];
};

ShelfStore.all = function () {
  return Object.keys(_shelves).map(function (shelfId) {
    return _shelves[shelfId];
  });
};

ShelfStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ShelfConstants.SHELVES_RECEIVED:
      resetShelves(payload.shelves);
      this.__emitChange();
      break;
    case ShelfConstants.SHELF_RECEIVED:
      setShelf(payload.shelf);
      this.__emitChange();
      break;
    case ShelfConstants.SHELF_REMOVED:
      removeShelf(payload.shelf);
      this.__emitChange();
      break;
  }
};

module.exports = ShelfStore;
