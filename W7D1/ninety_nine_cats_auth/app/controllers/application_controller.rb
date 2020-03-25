class ApplicationController < ActionController::Base
    helper_method :current_user, :login_user!, :redirect_user

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    # Maybe ask the TA about this
    def login_user!(user)
      user.reset_session_token!
      session[:session_token] = user.session_token
    end

    def redirect_user
      if current_user
        redirect_to cats_url
      end
    end
end
