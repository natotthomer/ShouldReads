class Reading < ActiveRecord::Base
  validates :status, inclusion: { in: ["read", "want to read", "currently reading"] }

  belongs_to :user
  belongs_to :book
end
