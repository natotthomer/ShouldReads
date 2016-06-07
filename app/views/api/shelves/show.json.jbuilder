json.extract! @shelf, :title, :description, :user_id, :id

json.books @shelf.books do |book|
  json.partial! 'api/books/book', book: book
end
