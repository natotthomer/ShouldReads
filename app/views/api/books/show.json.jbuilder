json.partial! 'api/books/book', book: @book
reading = @book.readings.find_by(user_id: current_user.id)
if reading
  json.status reading.status
else
  json.status nil
end
