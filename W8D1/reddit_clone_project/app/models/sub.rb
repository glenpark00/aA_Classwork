# == Schema Information
#
# Table name: subs
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  moderator   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Sub < ApplicationRecord
    validates :title, :description, :moderator, presence: true

    belongs_to :moderator,
        foreign_key: :moderator,
        class_name: :User

    has_many :posts,
        foreign_key: :sub_id,
        class_name: :Post

     has_many :post_subs,
        foreign_key: :sub_id,
        class_name: :PostSub
    
    has_many :sub_posts,
        through: :post_subs,
        source: :posts
end
