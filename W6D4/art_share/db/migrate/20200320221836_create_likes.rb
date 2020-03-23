class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :likeable_id
      t.string :likeable_type
      # For _type columns, rails requires a constant name of one of the models
      t.timestamps
    end

    add_index :likes, [:likeable_id, :likeable_type, :user_id], unique: true
  end
end
