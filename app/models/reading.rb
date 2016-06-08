class Reading < ActiveRecord::Base
  validates :status, inclusion: { in: ["Read", "Want to Read", "Currently Reading"] }

  belongs_to :user
  belongs_to :book
end
