class ShelfAssignment < ActiveRecord::Base

  validates :book_id, :shelf_id, presence: true
  validates :book_id, uniqueness: { scope: :shelf_id,
    message: "Shelf already has book" }

  belongs_to :book
  belongs_to :shelf
end
