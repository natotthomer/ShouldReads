class Book < ActiveRecord::Base
  validates :title, :author_fname, :author_lname, presence: true
  validates :title, uniqueness: { scope: [:author_fname, :author_lname],
    message: "Book title/Author name combination already exists" }

  has_many :shelves
  has_many :users,
    through: :shelves

end
