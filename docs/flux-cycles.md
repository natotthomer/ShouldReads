
## Book Cycles

### Books API Request Actions

* `fetchAllBooks`
  0. invoked from `BooksIndex` `didMount`/`willReceiveProps`
  0. `GET /api/books` is called.
  0. `receiveAllBooks` is set as the callback.

* `createBook`
  0. invoked from new book button `onClick`
  0. `POST /api/books` is called.
  0. `receiveSingleBook` is set as the callback.

* `fetchSingleBook`
  0. invoked from `BookDetail` `didMount`/`willReceiveProps`
  0. `GET /api/books/:id` is called.
  0. `receiveSingleBook` is set as the callback.

* `updateBook`
  0. invoked from `BookForm` `onSubmit`
  0. `POST /api/books` is called.
  0. `receiveSingleBook` is set as the callback.

* `destroyBook`
  0. invoked from delete book button `onClick`
  0. `DELETE /api/books/:id` is called.
  0. `removeBook` is set as the callback.

### Books API Response Actions

* `receiveAllBooks`
  0. invoked from an API callback.
  0. `Book` store updates `_books` and emits change.

* `receiveSingleBook`
  0. invoked from an API callback.
  0. `Book` store updates `_books[id]` and emits change.

* `removeBook`
  0. invoked from an API callback.
  0. `Book` store removes `_books[id]` and emits change.

### Store Listeners

* `BooksIndex` component listens to `Book` store.
* `BookDetail` component listens to `Book` store.


## Shelves Cycles

### Shelves API Request Actions

* `fetchAllShelves`
  0. invoked from `ShelvesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/shelves` is called.
  0. `receiveAllShelves` is set as the callback.

* `createShelf`
  0. invoked from new shelf button `onClick`
  0. `POST /api/shelves` is called.
  0. `receiveSingleShelf` is set as the callback.

* `fetchSingleShelf`
  0. invoked from `ShelfDetail` `didMount`/`willReceiveProps`
  0. `GET /api/shelves/:id` is called.
  0. `receiveSingleShelves` is set as the callback.

* `updateShelf`
  0. invoked from `ShelfForm` `onSubmit`
  0. `POST /api/shelves` is called.
  0. `receiveSingleShelf` is set as the callback.

* `destroyShelf`
  0. invoked from delete shelf button `onClick`
  0. `DELETE /api/shelves/:id` is called.
  0. `removeShelf` is set as the callback.

### Shelves API Response Actions

* `receiveAllShelves`
  0. invoked from an API callback.
  0. `Shelf` store updates `_shelves` and emits change.

* `receiveSingleShelf`
  0. invoked from an API callback.
  0. `Shelf` store updates `_shelves[id]` and emits change.

* `removeShelf`
  0. invoked from an API callback.
  0. `Shelf` store removes `_shelves[id]` and emits change.

### Store Listeners

* `ShelvesIndex` component listens to `Shelf` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `BookSearchBar` `onChange` when there is text
  0. `GET /api/books` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `BookSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
