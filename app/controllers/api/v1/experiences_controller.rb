class Api::V1::ExperiencesController < ApplicationController
    before_action :set_employee, :set_experience

    def index
        @experiences = @employee.experiences.all
        render json: @experiences
    end

    def new
        @experience = Experience.new
    end

    def create

    end

    def update
        @experience.update(experience_params)
        if @experience.save
            render json: ExperienceSerializer.new(@experience)
        end
    end

    def destroy
    end

private

    def set_employee
        @employee = Employee.find_by_id(params[:employee_id])
    end

    def experience_params
        params.require(:experience).permit(:title, :company, :city, :state, :zipcode, :phone, :startdate, :enddate, :description, :current)
    end

    def set_experience
        @experience = Experience.find_by(id: params[:id], employee_id: params[:employee_id])
    end

end