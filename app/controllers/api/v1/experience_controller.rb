class Api::V1::ExperienceController < ApplicationController
    before_action :set_profile

    def index
        @work_histories = @profile.work_histories.all
        render json: @work_histories
    end

    def new
        @work_history = WorkHistory.new
    end

private

    def set_profile
        @profile = Profile.find(params[:profile_id])
    end

end