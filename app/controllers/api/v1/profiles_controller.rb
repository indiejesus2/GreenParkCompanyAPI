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
            if !!history_params 
                    together = history_params.merge(employee)
                    @history = Experience.new(together)
                    @history.save
            end
            redirect_to api_v1_employee_path(@employee)
        else
            render json: @profile.errors
        end
    end

    def update
        @profile = @employee.profile
        employee = {employee_id: @employee.id, profile_id: @profile.id}
        @profile.update(profile_params)
        if @profile.save
            if !!history_params 
                together = history_params.merge(employee)
                @history = Experience.new(together)
                @history.save
            end
            redirect_to api_v1_employee_path(@employee)
        else
            render json: @profile.errors
        end
    end

    private
    
    def profile_params
        params.require(:profile).permit(:fname, :lname, :city, :state, :zipcode, :license, {:jobtype => []}, {:schedule  => []}, {:shifts => []}, :seasonstart, :seasonend, :minpay, :maxpay, :paytype, :industry, :description, :employee_id)
    end
    
    def history_params
        if !!params[:experience] && params[:experience][:title] != ""
            params.require(:experience).permit(:title, :company, :city, :state, :zipcode, :phone, :startdate, :enddate, :description, :current)
        end
    end

    def set_employee
        @employee = Employee.find_by_id(profile_params[:employee_id])
    end

end
