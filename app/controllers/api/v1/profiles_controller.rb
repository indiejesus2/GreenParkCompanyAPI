class Api::V1::ProfilesController < ApplicationController
    before_action :set_employee, only: [:new, :create, :update, :destroy]

    def index
        @profiles = Profile.all
        render json: {profiles: @profiles, work_histories: @profiles.work_histories}
    end

    def new
        @profile = Profile.new
    end

    def create
        @profile = Profile.new(profile_params)
        if @profile.save
            employee = {employee_id: @employee.id, profile_id: @profile.id}
            byebug
            together = history_params.merge(employee)
            @history = WorkHistory.new(together)
            @history.save
            render json: ProfileSerializer.new(@profile)
        else
            render json: @profile.errors
        end
    end

    def update 
        @profile = @employee.profile
        employee = {employee_id: @employee.id, profile_id: @profile.id}
        byebug
        together = history_params.merge(employee)
        @history = WorkHistory.new(together)
        @profile.update(profile_params)
        if @profile.save
            @history.save
            render json: ProfileSerializer.new(@profile)
        else
            render json: @profile.errors
        end
    end

    private
    
    def profile_params
        params.require(:profile).permit(:fname, :lname, :city, :state, :zipcode, :license, {:jobType => []}, {:schedule  => []}, {:shifts => []}, :seasonstart, :seasonend, :minpay, :maxpay, :industry, :military, :certificates, :description, :employee_id)
    end
    
    def history_params
        first = params.require(:experience)[0].permit(:id, :title, :company, :city, :state, :zipcode, :phone, :startdate, :enddate, :description, :current)
        second = params.require(:experience)[1].permit(:id, :title, :company, :city, :state, :zipcode, :phone, :startdate, :enddate, :description, :current)
        return first
        # return [first, second]
    end

    def set_employee
        @employee = Employee.find_by_id(params[:employee_id])
    end

end
