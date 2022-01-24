class Api::V1::EmployeesController < ApplicationController
  before_action :set_employee, only: %i[ show edit update destroy apply ]
  wrap_parameters :employee, include: [:name, :email, :password]

  # GET /employees or /employees.json
  def index
    @employees = Employee.all
    render json: EmployeeSerializer.new(@employees)
  end

  # GET /employees/1 or /employees/1.json
  def show
    render json: EmployeeSerializer.new(@employee)
  end

  # GET /employees/new
  def new
    @employee = Employee.new
  end

  # GET /employees/1/edit
  def edit
  end

  # POST /employees or /employees.json
  def create
    @employee = Employee.new(employee_params)
    if @employee.save
      # session[:user_id] = @employee.id
      # redirect_to api_v1_employee_jobs_path(@employee)
      # EmployeeMailer.with(employee: @employee).welcome_email.deliver_later
      redirect_to api_v1_employee_path(@employee)
      # format.html { redirect_to @employee, notice: "Employee was successfully created." }
        # format.json { render :show, status: :created, location: @employee }
    else
      render json: {error: "Email is associated with an existing account."}

        # format.html { render :new, status: :unprocessable_entity }
        # format.json { render json: @employee.errors, status: :unprocessable_entity }
    end
    # end
  end

  # PATCH/PUT /employees/1 or /employees/1.json
  def update
    if @employee
    render json: EmployeeSerializer.new(@employee)      
      # if @employee.update(employee_params)
      #   format.html { redirect_to @employee, notice: "Employee was successfully updated." }
      #   format.json { render :show, status: :ok, location: @employee }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @employee.errors, status: :unprocessable_entity }
    end
  end

  # DELETE /employees/1 or /employees/1.json
  def destroy
    @employee.destroy
    respond_to do |format|
      format.html { redirect_to employees_url, notice: "Employee was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  def apply
    @applicant = Applicant.find_by(employee_id: params[:id], job_id: params[:job_id])
    @applicant.interested = @applicant.interested == false ? true : false
    @applicant.save
    EmployeeMailer.with(employee: @employee, application: @applicant.id).applied_email.deliver_later
    render json: @employee.applicants
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee
      @employee = Employee.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def employee_params
      params.require(:employee).permit(:name, :email, :password)
    end

end
