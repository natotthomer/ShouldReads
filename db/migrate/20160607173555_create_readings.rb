class CreateReadings < ActiveRecord::Migration
  def change
    create_table :readings do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.string :status

      t.timestamps
    end

    add_index :readings, :user_id
    add_index :readings, :book_id
  end
end
