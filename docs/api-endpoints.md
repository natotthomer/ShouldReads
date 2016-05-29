# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Books

- `GET /api/books`
  - Books index/search
  - accepts `tag_name` query param to list books by tag
- `POST /api/books`
- `GET /api/books/:id`
- `PATCH /api/books/:id`
- `DELETE /api/books/:id`

### Shelves

- `GET /api/shelves`
- `POST /api/shelves`
- `GET /api/shelves/:id`
- `PATCH /api/shelves/:id`
- `DELETE /api/shelves/:id`
- `GET /api/shelves/:id/books`
  - index of all books for a shelf

### Tags

- A book's tags will be included in the book show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/books/:book_id/tags`: add tag to book by name
  - if book doesn't already exist, it will be created
- `DELETE /api/books/:book_id/tags/:tag_name`: remove tag from book by
  name

### Reviews

- A book's review will be included in the book show template
- `GET /api/books/:book_id/reviews`
- `GET /api/book/:book_id/reviews/:review_id`
- `POST /api/book/:book_id/reviews/:review_id/edit`
- `DELETE /api/books/:book_id/reviews/:review_id`
