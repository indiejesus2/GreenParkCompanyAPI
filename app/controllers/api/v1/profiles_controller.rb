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
            render json: @profile
        else
            render json: @profile.errors
        end
    end

    def update 
        @profile = @employee.profile
        @profile.update(profile_params)
        # byebug
        if @profile.save
            render json: {profile: @profile}
        else
            render json: @profile.errors
        end
    end

    private
    
    def profile_params
        params.require(:profile).permit(:fname, :lname, :zipcode, :phone, :status, :jobType, :schedule, :education, :history, :skills, :military, :certificates, :description, :employee_id)
    end

    def set_employee
        @employee = Employee.find_by_id(params[:employee_id])
    end

end
