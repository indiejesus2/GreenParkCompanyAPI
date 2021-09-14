class Api::V1::JobsController < ApplicationController
    before_action :set_employer, only: %i[ index new create show edit update destroy ]
    before_action :set_employee, only: %i[ index ]

    def index
        if @employee 
            @jobs = Job.near(@employee.profile.address, 50)
        elsif @employer
            @jobs = @employer.jobs
        else
            @jobs = Job.all
        end
        render json: @jobs
    end

    def show
    end

    def new
        @job = @employer.job.new
    end

    def edit
    end

    def create
        @job = @employer.jobs.new(job_params)
        if @job.save
            @job.status = true
            render json: @job
        else
            render json: @job.errors
        end
    end

    def update
    end

    def destroy
    end

    private

    def set_employee
        if (params[:employee_id])
            @employee = Employee.find(params[:employee_id])
        else
            nil
        end
    end

    def set_employer
        if (params[:employer_id])
            @employer = Employer.find(params[:employer_id])
        else
            nil
        end
    end

    def job_params
        params.require(:job).permit(:title, :status, :city, :state, {jobType: []}, {schedule: []}, {skill: []}, {certificates: []}, :description, :employer_id)
    end

end
