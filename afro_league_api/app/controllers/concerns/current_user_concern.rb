module CurrentUserConcern 
    extend ActiveSupport::Concern
    included do
        before_action :set_current_user
    end
    def set_current_user
        if session[:user_id]
            @current_user = User.find(session[:user_id])
            puts @current_user
        end
    end
end