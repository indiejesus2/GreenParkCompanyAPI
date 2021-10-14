class Api::V1::EmployersController < ApplicationController
  before_action :set_employer, only: %i[ show edit update destroy ]
  wrap_parameters :employer, include: [:name, :email, :password]

  # GET /employers or /employers.json
  def index
    @employers = Employer.all
    render json: @employers
  end

  # GET /employers/1 or /employers/1.json
  def show
    render json: EmployerSerializer.new(@employer)
  end

  # GET /employers/new
  def new
    @employer = Employer.new
  end

  # GET /employers/1/edit
  def edit
  end

  # POST /employers or /employers.json
  def create
    @employer = Employer.new(employer_params)
    if @employer.save
      # @employer.profile.new()
      session[:user_id] = @employer.id
      render json: @employer
    else
      render json: @employer.errors
    end
  end

  # PATCH/PUT /employers/1 or /employers/1.json
  def update
      if @employer.update(employer_params)
        if !@employer.subscription.empty?
          @employer.status = true
          @employer.save
        end
        render json: EmployerSerializer.new(@employer)
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @employer.errors, status: :unprocessable_entity }
      end
  end

  # DELETE /employers/1 or /employers/1.json
  def destroy
    @employer.destroy
    respond_to do |format|
      format.html { redirect_to employers_url, notice: "Employer was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employer
      @employer = Employer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def employer_params
      params.require(:employer).permit(:name, :email, :password, :subscription, :status)
    end

end
