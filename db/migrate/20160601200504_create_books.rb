class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author_name, null: false
      t.string :cover_url, null: false

      t.timestamps null: false
    end

    add_index :books, :title
    add_index :books, :author_name
    add_index :books, [:author_name, :title], unique: true
  end
end
