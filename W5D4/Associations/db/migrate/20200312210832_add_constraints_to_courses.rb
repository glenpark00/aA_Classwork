class AddConstraintsToCourses < ActiveRecord::Migration[5.1]
  def change
    change_column_null :courses, :name, false
    change_column_null :courses, :instructor_id, false
  end
end
