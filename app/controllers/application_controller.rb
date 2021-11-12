class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session
    skip_before_action :verify_authenticity_token

    helper_method :logged_in?, :current_user, :authorized_user?, :logout!, :set_user

    def logged_in?
        !!session[:employee_id] || !!session[:contractor_id]
    end

    def current_user
        if session[:employee_id]
            @current_user = Employee.find(session[:user_id])
        elsif session[:contractor_id]
            @current_user = Employer.find(session[:user_id])
        end
    end

    def authorized_user?
        @user == current_user
    end

    def logout!
        session.clear
    end

    def set_user
        if session[:employee_id]
            @user = Employee.find(session[:user_id])
        elsif session[:contractor_id]
            @user = Employer.find(session[:user_id])
        end
    end

    def findcity
        byebug
    end
    
end
