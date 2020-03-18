# == Schema Information
#
# Table name: developers
#
#  id                :integer          not null, primary key
#  student_pod_id    :integer
#  student_circle_id :integer
#  name              :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Developer < ApplicationRecord
    belongs_to :circle,
    primary_key: :id,
    foreign_key: :student_circle_id,
    class_name: 'Circle',
    optional: true

    has_many :led_circles,
    primary_key: :id,
    foreign_key: :circle_leader_id,
    class_name: 'Circle'

    has_many :teaching_assistant_memberships,
    primary_key: :id,
    foreign_key: :teaching_assistant_id,
    class_name: 'TeachingAssistantMembership'

    has_many :pods,
    primary_key: :id,
    foreign_key: :pod_leader_id,
    class_name: 'Pod'

    belongs_to :pod,
    primary_key: :id,
    foreign_key: :student_pod_id,
    class_name: 'Pod',
    optional: true

    has_one :led_pod,
    primary_key: :id,
    foreign_key: :pod_leader_id,
    class_name: 'Pod'

    has_one :pod_leader,
    through: :pod,
    source: :pod_leader

    has_many :students,
    through: :led_pod,
    source: :students

    has_one :final_project,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: 'FinalProject'

    has_many :supervising_projects,
    through: :students,
    source: :final_project

    has_many :technological_skills,
    through: :final_project,
    source: :technologies
end
