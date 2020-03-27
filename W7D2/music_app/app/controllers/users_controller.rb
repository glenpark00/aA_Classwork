class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.new(params.require(:user).permit(:email, :password))
    if user.save
      log_in_user!(user)
      redirect_to user_url(user)
    else
      redirect_to new_user_url
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end
end
