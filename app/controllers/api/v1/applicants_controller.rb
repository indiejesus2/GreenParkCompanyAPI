class Api::V1::ApplicantsController < ApplicationController
    before_action :set_employee
    before_action :set_employer
    before_action :set_job
    before_action :set_applicant, only: [:edit, :update, :destroy]

    # def index
    #     if @employee 
    #         # @jobs = Job.near(@employee.profile.address, @employee.profile.commute)
    #         @jobs = @employee.jobs
    #         render json: {employee: EmployeeSerializer.new(@employee), jobs: JobSerializer.new(@jobs)}
    #     elsif @employer
    #         @jobs = @employer.jobs
    #         render json: {contractor: @employer, jobs: JobSerializer.new(@jobs), applicants: @employer.applicants}
    #     else
    #         @jobs = Job.all
    #     end
    # end

    # def show
    #     @job = Job.find(params[:id])
    #     @employer = @job.employer
    #     @candidates = @job.proximity
    #     if !search_params.blank?
    #         @candidates = @candidates.potential(search_params)
    #     end
    #     render json: {job: JobSerializer.new(@job)}
    # end

    # def new
    #     @job = @employer.jobs.new
    # end

    # def edit
    # end

    # def create
    #     @job = @employer.jobs.new(job_params)
    #     if @job.save
    #         # @employees = @employer.applicants.map {|applicant| applicant.employee }
    #         render json: JobSerializer.new(@job)
    #         # , candidates: EmployeeSerializer.new(@employees, include: [:profile, :work_histories])}
    #     else
    #         render json: @job.errors
    #     end
    # end

    def update
        @applicant.update(applicant_params)
        if @applicant.save
            redirect_to api_v1_employer_job_path(@employer, @job), status: 303
        else
            render json: @applicant.errors
        end
    end

    def destroy
        @job = @employer.jobs.find(params[:id])
        @job.destroy
        render json: @job
    end

    private

    def applicant_params
        params.require(:applicant).permit(:employee_id, :employer_id, :job_id, :acceptance, :savedJob, :savedApplicant)
    end
    
    def set_employee
        if (applicant_params[:employee_id])
            @employee = Employee.find(applicant_params[:employee_id])
        else
            nil
        end
    end

    def set_employer
        if (applicant_params[:employer_id])
            @employer = Employer.find(applicant_params[:employer_id])
        else
            nil
        end
    end

    def set_job
        @job = Job.find(applicant_params[:job_id])
    end

    def set_applicant
        @applicant = Applicant.find_by(employee_id: @employee.id, employer_id: @employer.id, job_id: @job.id)
    end


end