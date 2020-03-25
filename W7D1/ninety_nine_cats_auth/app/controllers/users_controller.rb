class UsersController < ApplicationController
    before_action :redirect_user

    def new
        render :new
    end

    def create
        user = User.new(user_params)
        if user.save
            login_user!(user) 
            redirect_to cats_url
        else
            redirect_to new_user_url
        end
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end

end
