require 'rails_helper'

RSpec.describe User, type: :model do
  describe "should validate all the columns of users" do
    it {should validate_presence_of(:email)}
    it {should validate_presence_of(:password_digest)}

    subject(:user) { FactoryBot.create(:user) }

    it "ensures user has a session token" do
      expect(user.session_token).to be_present
    end

    it {should validate_uniqueness_of(:email)}
    it {should validate_uniqueness_of(:session_token)}
  end
end
