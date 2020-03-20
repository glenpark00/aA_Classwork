# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  username   :string
#
class User < ApplicationRecord
    validates :email, :name, presence: true

    has_many :artworks,
    foreign_key: :artist_id,
    class_name: :Artwork

    has_many :shares,
    foreign_key: :viewer_id,
    class_name: :ArtworkShare


    has_many :shared_artworks,
        through: :shares,
        source: :artwork
end
