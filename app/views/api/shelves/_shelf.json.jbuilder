json.title shelf.title
json.description shelf.description
json.id shelf.id
json.user shelf.user
json.shelf_assignments shelf.shelf_assignments
json.books shelf.books do |book|
  json.partial! 'api/books/book', book: book
end
