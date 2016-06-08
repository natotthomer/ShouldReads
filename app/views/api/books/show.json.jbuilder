json.partial! 'api/books/book', book: @book
# json.status @book.readings.where(user_id: current_user.id)[0].status
