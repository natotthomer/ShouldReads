json.array! @books do |book|

  json.title book.title
  json.author do
    json.author_fname book.author_fname
    json.author_lname book.author_lname
  end
end
