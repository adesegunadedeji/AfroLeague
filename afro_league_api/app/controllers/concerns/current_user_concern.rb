module CurrentUserConcern 
    extend ActiveSupport::Concern
    included do
        before_action :set_current_user
    end
    def set_current_user
        if session[:user_id]
            @current_user = User.find(session[:user_id])
            puts "============== CURRENT USER"
            puts @current_user
            puts "============== CURRENT USER"
        end
    end
end