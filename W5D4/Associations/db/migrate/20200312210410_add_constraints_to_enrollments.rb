class AddConstraintsToEnrollments < ActiveRecord::Migration[5.1]
  def change
    change_column_null :enrollments, :course_id, false
    change_column_null :enrollments, :student_id, false
  end
end
