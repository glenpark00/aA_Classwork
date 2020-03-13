class ShortenedUrl < ApplicationRecord
  validates :short_url, :long_url, null: false
  validates :short_url, uniqueness: true

  def self.random_code
    url = SecureRandom.urlsafe_base64
    
    while ShortenedUrl.exists?(short_url: url)
      url = SecureRandom.urlsafe_base64
    end

    return url
  end

  def self.shortened_url(user, long_url)
    ShortenedUrl.create!(user_id:user.id,long_url:long_url,short_url:self.random_code)
  end

  belongs_to :submitter,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
