json.partial! 'api/shelves/shelf', shelf: @shelf

json.books @shelf.books do |book|
  json.partial! 'api/books/book', book: book
end
