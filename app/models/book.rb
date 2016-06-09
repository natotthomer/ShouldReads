class Book < ActiveRecord::Base
  validates :title, :author_fname, :author_lname, presence: true
  validates :title, uniqueness: { scope: [:author_fname, :author_lname],
    message: "Book title/Author name combination already exists" }


  has_attached_file :cover, default_url: "book-438935_960_720.png"
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\Z/

  has_many :shelves
  has_many :users,
    through: :shelves
  has_many :readings
  has_many :user_readings,
    through: :readings,
    source: :user
end
