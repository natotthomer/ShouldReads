class RemovesNullConstraintFromPasswordDigestOnUsers < ActiveRecord::Migration
  def change
    remove_column :users, :password_digest, :string
    add_column :users, :password_digest, :string
  end
end
