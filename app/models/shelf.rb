class Shelf < ActiveRecord::Base
  validates :user_id, :title, presence: true
  validates :user_id, uniqueness: { scope: :title,
    message: "Shelf with that name already exists" }

  belongs_to :user
  has_many :shelf_assignments
  has_many :books,
    through: :shelf_assignments
end
