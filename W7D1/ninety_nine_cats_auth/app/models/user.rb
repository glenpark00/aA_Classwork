class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :session_token, uniqueness: true

  after_initialize :ensure_session_token

  has_many :cats, 
    foreign_key: :user_id, 
    class_name: :Cat

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end
end
