# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Book.destroy_all
Shelf.destroy_all

User.create(username: 'guest', password: 'password1')
User.create(username: 'nat', password: 'password')

shelves = Shelf.create([
  { title: "Fantasy & Science Fiction", user_id: User.where(username: "nat")[0].id, description: "Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Phasellus gravida est tortor, quis varius
    augue sagittis in. Fusce et velit non lacus placerat vehicula."},
  { title: "Philosophy & Theory", user_id: User.where(username: "nat")[0].id, description: "Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Phasellus gravida est tortor, quis varius
    augue sagittis in. Fusce et velit non lacus placerat vehicula."},
  { title: "Goosebumps", user_id: User.where(username: "nat")[0].id, description: "Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Phasellus gravida est tortor, quis varius
    augue sagittis in. Fusce et velit non lacus placerat vehicula."},
  { title: "Box Car Children", user_id: User.where(username: "nat")[0].id, description: "Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Phasellus gravida est tortor, quis varius
    augue sagittis in. Fusce et velit non lacus placerat vehicula."},
  { title: "Judy Blume", user_id: User.where(username: "nat")[0].id, description: "Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Phasellus gravida est tortor, quis varius
    augue sagittis in. Fusce et velit non lacus placerat vehicula."},
  { title: "Harry Potter", user_id: User.where(username: "guest")[0].id, description: "Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Phasellus gravida est tortor, quis varius
    augue sagittis in. Fusce et velit non lacus placerat vehicula."},
  { title: "Wizard of Oz", user_id: User.where(username: "guest")[0].id, description: "Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Phasellus gravida est tortor, quis varius
    augue sagittis in. Fusce et velit non lacus placerat vehicula."},
  { title: "Fiction", user_id: User.where(username: "guest")[0].id, description: "Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Phasellus gravida est tortor, quis varius
    augue sagittis in. Fusce et velit non lacus placerat vehicula."}
])

books = Book.create([
  { title: "Grapes of Wrath", author_fname: "John", author_lname: "Steinbeck", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png"},
  { title: "The Hobbit", author_fname: "J.R.R.", author_lname: "Tolkien", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "The Fellowship of the Ring", author_fname: "J.R.R.", author_lname: "Tolkien", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "The Two Towers", author_fname: "J.R.R.", author_lname: "Tolkien", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "The Return of the King", author_fname: "J.R.R.", author_lname: "Tolkien", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "Ender's Game", author_fname: "Orson Scott", author_lname: "Card", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "Dune", author_fname: "Frank", author_lname: "Herbert", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "The History of Sexuality, Part I", author_fname: "Michel", author_lname: "Foucault", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "Madness and Civilization", author_fname: "Michel", author_lname: "Foucault", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "The Birth of the Clinic", author_fname: "Michel", author_lname: "Foucault", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "The Order of Things", author_fname: "Michel", author_lname: "Foucault", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "Archeology of Knowledge", author_fname: "Michel", author_lname: "Foucault", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "Discipline and Punish", author_fname: "Michel", author_lname: "Foucault", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "To Kill A Mockingbird", author_fname: "Harper", author_lname: "Lee", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "All the Light We Cannot See", author_fname: "Anthony", author_lname: "Doer", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "The River Why", author_fname: "David James", author_lname: "Duncan", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "A River Runs Through It", author_fname: "Norman", author_lname: "Maclean", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" },
  { title: "The Name of the Wind", author_fname: "Patrick", author_lname: "Rothfuss", cover: "https://s3.amazonaws.com/shouldreads-dev/book-438935_960_720.png" }
])

shelf_assignments = ShelfAssignment.create([
  { book_id: Book.where(title: "The History of Sexuality, Part I")[0].id, shelf_id: Shelf.where(title: "Philosophy & Theory")[0].id },
  { book_id: Book.where(title: "Madness and Civilization")[0].id, shelf_id: Shelf.where(title: "Philosophy & Theory")[0].id },
  { book_id: Book.where(title: "The Birth of the Clinic")[0].id, shelf_id: Shelf.where(title: "Philosophy & Theory")[0].id },
  { book_id: Book.where(title: "The Order of Things")[0].id, shelf_id: Shelf.where(title: "Philosophy & Theory")[0].id },
  { book_id: Book.where(title: "Archeology of Knowledge")[0].id, shelf_id: Shelf.where(title: "Philosophy & Theory")[0].id },
  { book_id: Book.where(title: "Discipline and Punish")[0].id, shelf_id: Shelf.where(title: "Philosophy & Theory")[0].id },
  { book_id: Book.where(title: "The Hobbit")[0].id, shelf_id: Shelf.where(title: "Fantasy & Science Fiction")[0].id },
  { book_id: Book.where(title: "The Fellowship of the Ring")[0].id, shelf_id: Shelf.where(title: "Fantasy & Science Fiction")[0].id },
  { book_id: Book.where(title: "The Two Towers")[0].id, shelf_id: Shelf.where(title: "Fantasy & Science Fiction")[0].id },
  { book_id: Book.where(title: "The Return of the King")[0].id, shelf_id: Shelf.where(title: "Fantasy & Science Fiction")[0].id },
  { book_id: Book.where(title: "Ender's Game")[0].id, shelf_id: Shelf.where(title: "Fantasy & Science Fiction")[0].id },
  { book_id: Book.where(title: "Dune")[0].id, shelf_id: Shelf.where(title: "Fantasy & Science Fiction")[0].id }
])
