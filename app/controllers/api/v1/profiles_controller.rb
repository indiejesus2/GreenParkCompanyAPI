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
            employee = {employee_id: @employee.id}
            if !!history_params 
                for history in history_params
                    together = history.merge(employee)
                    @history = Experience.new(together)
                    @history.save
                end
            end
            redirect_to api_v1_employee_path(@employee)
        else
            render json: @profile.errors
        end
    end

    def update
        @profile = @employee.profile
        employee = {employee_id: @employee.id}
        @profile.update(profile_params)
        if @profile.save
            if !!history_params 
                for history in history_params
                    together = history.merge(employee)
                    @history = Experience.new(together)
                    @history.save
                end
            end
            redirect_to api_v1_employee_path(@employee)
        else
            render json: @profile.errors
        end
    end

    private
    
    def profile_params
        params.require(:profile).permit(:fname, :lname, :city, :state, :zipcode, :phone, :license, {:jobtype => []}, {:schedule  => []}, {:shifts => []}, :seasonstart, :seasonend, :minpay, :paytype, :commute, :trade, :description, :employee_id)
    end
    
    def history_params
        if !!params[:experience]
            experience = params.require(:experience)
            history = []
            if !!experience["0"]
                history.push(experience["0"].permit(:title, :company, :city, :state, :zipcode, :phone, :startdate, :enddate, :description, :current))        
                if !!experience["1"]
                    history.push(experience["1"].permit(:title, :company, :city, :state, :zipcode, :phone, :startdate, :enddate, :description, :current))        
                    if !!experience["2"]
                        history.push(experience["2"].permit(:title, :company, :city, :state, :zipcode, :phone, :startdate, :enddate, :description, :current))        
                    end
                end
            end
        return history
        end
    end

    def set_employee
        @employee = Employee.find_by_id(profile_params[:employee_id])
    end

end
