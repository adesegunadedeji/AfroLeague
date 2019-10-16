class SessionsController < ApplicationController
  include CurrentUserConcern
  def new
  end
  def create
    user = User.find_by(email: params["email"]).try(:authenticate, params["password"])

    if user
      puts "================= USER SESSIONS"
      puts user.id
      puts "================= USER SESSIONS"
      session[:user_id] = user.id
      puts "================= PARAMS SESSIONS"
      puts params
      puts "================= PARAMS SESSIONS"
      render json: {
        status: :created,
        logged_in: true,
        user: user
      }
    else
      render json: { status: 401 }
    end
  end
  def logged_in
    puts "================= LOGGEDIN SESSIONS"
    puts [:user_id]
    puts "================= LOGGEDIN SESSIONS"
    @current_user = User.find_by(session[:user_id])
      if @current_user
        render json: {
        logged_in: true,
        user: @current_user,
        status: "USER IS LOGGED IN"
      }
      else
      render json: {
        logged_in: false,
        user: @current_user
      }
      end
  end
  
  def logout
    session[:user_id] = nil
    render json: {status: 200, logged_out: true}
  end
end
