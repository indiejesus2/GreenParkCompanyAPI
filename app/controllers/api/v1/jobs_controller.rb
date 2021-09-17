class Api::V1::JobsController < ApplicationController
    before_action :set_employer, only: %i[ index new create show edit update destroy ]
    before_action :set_employee, only: %i[ index, show ]

    def index
        if @employee 
            @jobs = Job.near(@employee.profile.address, 50)
        elsif @employer
            @jobs = @employer.jobs
            @applicants = @jobs.map {|job| job.applicants if !job.applicants.empty?}.compact
            @employees = @applicants.map do 
                |applicant| 
                applicant.map do 
                    |apply|
                    apply.employee 
                end
            end
            byebug
            render json: {jobs: @jobs, candidates: EmployeeSerializer.new(@employees[0], include: [:profile, :work_histories])}
        else
            @jobs = Job.all
        end
        # render json: @jobs
    end

    def show
        @job = @employer.jobs.find(params[:id])
        @candidates = @job.proximity
        if !search_params.blank?
            @candidates = @candidates.potential(search_params)
        end
        render json: {job: @job, candidates: @job.candidates}
    end

    def new
        @job = @employer.jobs.new
    end

    def edit
    end

    def create
        @job = @employer.jobs.new(job_params)
        if @job.save
            @job.status = true
            @job.applicants = @job.proximity
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

    def search_params
        params.permit(:jobtype, :schedule, :skill, :certificates)
    end

end
