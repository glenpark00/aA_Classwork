require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe 'GET #new' do
    it 'renders the new users template' do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe 'POST #create' do
    context 'with valid credentials' do
      it "creates the user" do
          post :create, params: {user: {email: "Glen1", password: "123456"}}
          expect(response).to redirect_to(user_url(User.last))
      end
    end

    context 'with invalid credentials' do
        it "should redirect to new user page" do
            post :create, params: {user: {email: "Glen"}}
            expect(response).to redirect_to(new_user_url)
        end
    end
  end
end
