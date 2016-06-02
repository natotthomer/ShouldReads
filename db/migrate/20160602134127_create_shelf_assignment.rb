class CreateShelfAssignment < ActiveRecord::Migration
  def change
    create_table :shelf_assignments do |t|
      t.integer :shelf_id, null: false
      t.integer :book_id, null: false
    end
  end
end
