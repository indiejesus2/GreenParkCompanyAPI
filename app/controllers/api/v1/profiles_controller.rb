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
        # byebug
        @profile = @employee.profile
        @profile.update(profile_params)
        if @profile.save
            render json: {profile: @profile}
        else
            render json: @profile.errors
        end
    end

    private
    
    def profile_params
        # jobType_params = (params[:profile] || {})[jobType: :value].keys
        # byebug
        params.require(:profile).permit(:id, :fname, :lname, :zipcode, :phone, :status, {jobType: :value}, {:schedule  => []}, :education, {:history => []}, {:skills => []}, :military, :certificates, :description, :employee_id)
    end

    def set_employee
        @employee = Employee.find_by_id(params[:employee_id])
    end

end
