class CreateShelves < ActiveRecord::Migration
  def change
    create_table :shelves do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description
    end

    add_index :shelves, :user_id
    add_index :shelves, :title
  end
end
