class SessionsController < ApplicationController
  before_action :require_login, only: [:destroy]

  def new

  end

  def destroy
    log_out
  end 

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      login!(user)
      redirect_to users_url
    else
      flash[:errors] = user.errors.full_messages
      render :new
    end
  end
end
