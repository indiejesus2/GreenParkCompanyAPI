class Api::V1::JobsController < ApplicationController
    before_action :set_employee
    before_action :set_employer
    before_action :set_job, only: [:edit, :update, :destroy]

    def index
        if @employee 
            # @jobs = Job.near(@employee.profile.address, @employee.profile.commute)
            @jobs = @employee.jobs.filter{|job| job.status == true}
            render json: {employee: EmployeeSerializer.new(@employee), jobs: JobSerializer.new(@jobs)}, prerender: true
        elsif @employer
            @files = {}
            @jobs = @employer.jobs
            @candidates = @employer.applicants.filter{|applicant| applicant.acceptance != false}
            @employees = @jobs.map{|job| job.employees}
            if @employees.length > 0 
                @applicants = @employees[0].map{|employee| employee}
                @applicants.each{|applicant|
                    if applicant.file.attached?
                        @files[applicant.id] = applicant.file.url
                    end
                }
            end
            render json: {contractor: @employer, jobs: JobSerializer.new(@jobs), applicants: ApplicantSerializer.new(@candidates), files: @files, subscription: SubscriptionSerializer.new(@employer.subscription)}, prerender: true
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
        render json: {job: JobSerializer.new(@job) }
    end

    def new
        @job = @employer.jobs.new
    end

    def edit
    end

    def create
        @job = Job.new(job_params)
        # @job.proximity
        # @job.potential
        if @job.save
            # @employees = @employer.applicants.map {|applicant| applicant.employee }
            render json: {job: JobSerializer.new(@job), applicants: ApplicantSerializer.new(@job.applicants)}
            # , candidates: EmployeeSerializer.new(@employees, include: [:profile, :work_histories])}
        else
            render json: @job.errors
        end
    end
    
    def update
        @job.update(job_params)
        @job.updateTrade
        @job.updatedProximity
        # @job.proximity
        # @job.potential
        if @job.save            
            render json: {job: JobSerializer.new(@job), applicants: ApplicantSerializer.new(@employer.applicants)}
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
