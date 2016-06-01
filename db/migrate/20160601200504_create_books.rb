class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author_fname, null: false
      t.string :author_lname, null: false
      t.string :cover_url

      t.timestamps null: false
    end

    add_index :books, :title
    add_index :books, :author_fname
    add_index :books, :author_lname
    add_index :books, [:title, :author_fname, :author_lname], unique: true
  end
end
