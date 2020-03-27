require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
    describe "GET#new" do
        it "shows the sign-in page" do
            get :new
            expect(response).to render_template(:new)
        end
    end

    describe "POST#create" do
        context "with valid params" do
          # let! does not lazily instantiate the user
          let!(:user) { User.create(email: 'Glen1', password: "123456") }
          it "should log in the user" do
            post :create, params: {user: {email: "Glen1", password: "123456"}}
            # user.reload
            user = User.find_by(email: 'Glen1')
            expect(user.session_token).to eq(session[:session_token])
            expect(response).to redirect_to(user_url(user))
          end
        end
        context "with invalid params" do
          it "should redirect the user back to the sign in page" do
            post :create, params: {user: {email: "Glen1"}} 
            expect(response).to redirect_to(new_session_url)
            # expect(flash[:errors]).to be_present
          end
        end
    end

    describe "DELETE#destroy" do
      it "logs out the user" do
        delete :destroy
        expect(session[:session_token]).to be_not_present
      end
    end
end
