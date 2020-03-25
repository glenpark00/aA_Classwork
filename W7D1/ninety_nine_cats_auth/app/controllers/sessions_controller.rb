class SessionsController < ApplicationController
  before_action :redirect_user, except: [:destroy]

  def create
    user = User.find_by_credentials(
      params[:session][:username],
      params[:session][:password])
    if user
      login_user!(user)
      redirect_to cats_url
    else
        render :new
    end
  end 

  def new
    render :new
  end

  def destroy
    if current_user
        current_user.reset_session_token!
        session[:session_token] = nil
        redirect_to new_session_url
    else
        render :new
    end
  end

end
