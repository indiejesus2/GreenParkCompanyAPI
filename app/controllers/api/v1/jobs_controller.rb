class Api::V1::JobsController < ApplicationController
    before_action :set_employee
    before_action :set_employer

    def index
        if @employee 
            @jobs = Job.near(@employee.profile.address, 50)
            render json: {employee: EmployeeSerializer.new(@employee, include: [:profile, :work_histories]), jobs: @jobs}
        elsif @employer
            @jobs = @employer.jobs
            render json: {contractor: @employer, jobs: JobSerializer.new(@jobs)}
        else
            @jobs = Job.all
        end
    end

    def show
        @job = Job.find(params[:id])
        @employer = @job.employer
        @candidates = @job.proximity
        if !search_params.blank?
            @candidates = @candidates.potential(search_params)
        end
        render json: {job: JobSerializer.new(@job)}
    end

    def new
        @job = @employer.jobs.new
    end

    def edit
    end

    def create
        @job = @employer.jobs.new(job_params)
        @job.save
        if @job.save
            byebug
            # @employees = @employer.applicants.map {|applicant| applicant.employee }
            render json: {jobs: JobSerializer.new(@job)}
            # , candidates: EmployeeSerializer.new(@employees, include: [:profile, :work_histories])}
        else
            render json: @job.errors
        end
    end

    def update
    end

    def destroy
        @job = @employer.jobs.find(params[:id])
        @job.destroy
        render json: {jobs: JobSerializer.new(@employer.jobs)}
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
        params.require(:job).permit(:title, :status, :city, :state, {jobType: []}, {schedule: []}, {skills: []}, {certificates: []}, :description, :employer_id)
    end

    def search_params
        params.permit(:jobtype, :schedule, :skill, :certificates)
    end

end
