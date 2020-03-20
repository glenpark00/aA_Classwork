class AddUsernameToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :username, :string
    
    # change_column_null :users, :username, false  

    add_index :users, :username, unique: true
  end
end
