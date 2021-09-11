class Api::V1::JobsController < ApplicationController
    before_action :set_employer, only: %i[ new create show edit update destroy ]

    def index
        @jobs = Job.all
        render json: @jobs
    end

    def show
    end

    def new
        @job = Employer.job.new
    end

    def edit
    end

    def create
        @job = Employer.job.new(job_params)
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

    def set_employer
        @employer = Employer.find(params[:employer_id])
    end

    def job_params
        params.require(:job).permit(:title, :status, :location, {jobType: []}, {schedule: []}, skill: [], certificates: [], :description, :employer_id)
    end

end
