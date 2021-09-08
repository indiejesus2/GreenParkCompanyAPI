class Api::V1::ProfilesController < ApplicationController
    before_action :set_employee, only: [:new, :create, :update, :destroy]

    def index
        @profiles = Profile.all
        render json: @profiles
    end

    def new
        @profile = Profile.new
    end

    def create
        @profile = @employee.profiles.new(profile_params)
        if @profile.save
            render json: @employee
        else
            render json: @employee.errors
        end
    end

    private
    
    def profile_params
        params.require(:profile).permit()
    end

    def set_employee
        @employee = current_user.employee if current_user
    end

end
