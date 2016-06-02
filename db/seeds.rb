# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Book.destroy_all
Shelf.destroy_all

shelves = Shelf.create([
    { title: "Fantasy & Science Fiction", user_id: 1, description: "Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Phasellus gravida est tortor, quis varius
      augue sagittis in. Fusce et velit non lacus placerat vehicula."},
    { title: "Philosophy & Theory", user_id: 1, description: "Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Phasellus gravida est tortor, quis varius
      augue sagittis in. Fusce et velit non lacus placerat vehicula."}
  ])

books = Book.create([
    { title: "Grapes of Wrath", author_fname: "John", author_lname: "Steinbeck" },
    { title: "The Hobbit", author_fname: "J.R.R.", author_lname: "Tolkien" },
    { title: "The Fellowship of the Ring", author_fname: "J.R.R.", author_lname: "Tolkien" },
    { title: "The Two Towers", author_fname: "J.R.R.", author_lname: "Tolkien" },
    { title: "The Return of the King", author_fname: "J.R.R.", author_lname: "Tolkien" },
    { title: "Ender's Game", author_fname: "Orson Scott", author_lname: "Card" },
    { title: "The History of Sexuality, Part I", author_fname: "Michel", author_lname: "Foucault" },
    { title: "Madness and Civilization", author_fname: "Michel", author_lname: "Foucault" },
    { title: "The Birth of the Clinic", author_fname: "Michel", author_lname: "Foucault" },
    { title: "The Order of Things", author_fname: "Michel", author_lname: "Foucault" },
    { title: "Archeology of Knowledge", author_fname: "Michel", author_lname: "Foucault" },
    { title: "Discipline and Punish", author_fname: "Michel", author_lname: "Foucault" },
    { title: "To Kill A Mockingbird", author_fname: "Harper", author_lname: "Lee" },
    { title: "All the Light We Cannot See", author_fname: "Anthony", author_lname: "Doer" },
    { title: "The River Why", author_fname: "David James", author_lname: "Duncan" },
    { title: "A River Runs Through It", author_fname: "Norman", author_lname: "Maclean" },
    { title: "The Name of the Wind", author_fname: "Patrick", author_lname: "Rothfuss" }
  ])
