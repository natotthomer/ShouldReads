class ChangeTwitterUidToString < ActiveRecord::Migration
  def change
    remove_column :users, :twitter_uid, :integer
    add_column :users, :twitter_uid, :string
  end
end
