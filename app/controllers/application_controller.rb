class ApplicationController < ActionController::Base

    protect_from_forgery with: :null_session

    def logged_in?
        !!session[:user_id]
    end

    def current_user
        if session[:user_id]
            Employee.find(sessions[:user_id])
        end
    end
    
    
end
