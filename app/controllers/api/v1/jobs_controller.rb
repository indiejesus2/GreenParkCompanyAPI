class Api::V1::JobsController < ApplicationController
    before_action :set_employee
    before_action :set_employer
    before_action :set_job, only: [:edit, :update, :destroy]

    def index
        if @employee 
            @jobs = Job.near(@employee.profile.address, @employee.profile.commute)
            render json: {employee: EmployeeSerializer.new(@employee), jobs: JobSerializer.new(@jobs)}
        elsif @employer
            @jobs = @employer.jobs
            render json: {contractor: @employer, jobs: JobSerializer.new(@jobs), applicants: @employer.applicants}
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
        if @job.save
            # @employees = @employer.applicants.map {|applicant| applicant.employee }
            render json: JobSerializer.new(@job)
            # , candidates: EmployeeSerializer.new(@employees, include: [:profile, :work_histories])}
        else
            render json: @job.errors
        end
    end

    def update
        @job.update(job_params)
        if @job.save
            render json: JobSerializer.new(@job)
        else
            render json: @job.errors
        end
    end

    def destroy
        @job = @employer.jobs.find(params[:id])
        @job.destroy
        render json: @job
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

    def set_job
        @job = Job.find(params[:id])
    end

    def job_params
        params.require(:job).permit(:trade, :title, :status, :city, :state, :zipcode, {jobtype: []}, {schedule: []}, {shifts: []}, :description, :seasonstart, :seasonend, :minpay, :paytype, :license, :employer_id)
    end

end
