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
        if @profile.save
            render json: {profile: @profile}
        else
            render json: @profile.errors
        end
    end

    private
    
    def profile_params
        # jobType_params = (params[:profile] || {})[jobType: :value].keys
        params.require(:profile).permit(:id, :fname, :lname, :city, :state, :phone, :status, {:jobType => []}, {:schedule  => []}, :education, {:skills => []}, :military, :certificates, :description, :employee_id, :work_histories)
        # _attributes => [:title, :company, :city, :state, :phone, :startdate, :enddate, :description, :current, :employee_id]})
        #     whitelisted[:history] = params[:profile][:history]
        # end
    end
    
    def history_params
        params.require(:profile).permit({:work_histories => [:title, :company, :city, :state, :phone, :startdate, :enddate, :description, :current, :employee_id]})
    end
    #     params.require(:history).permit(:id, :title, :company, :zipcode, :phone, :description).tap do |whitelisted|
    #         whitelisted[:history] = params[:profile][:history]
    #     end
    # end

    def set_employee
        @employee = Employee.find_by_id(params[:employee_id])
    end

end
