class RemoveCoverUrlFromBooks < ActiveRecord::Migration
  def change
    remove_column :books, :cover_url, :string
  end
end
