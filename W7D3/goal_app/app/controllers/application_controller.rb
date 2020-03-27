class ApplicationController < ActionController::Base
  helper_method :log_in, :current_user, :logged_in?, :log_out

  # skip_before_action :verify_authenticity_token

  def log_in(user)
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_out
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
end
