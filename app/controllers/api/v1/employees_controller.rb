class Api::V1::EmployeesController < ApplicationController
  before_action :set_employee, only: %i[ show edit update destroy ]
  wrap_parameters :employee, include: [:name, :email, :password]

  # GET /employees or /employees.json
  def index
    @employees = Employee.all
    # render json: @employees
    render json: EmployeeSerializer.new(@employees, include: [:profile, :work_histories])
  end

  # GET /employees/1 or /employees/1.json
  def show
    render json: EmployeeSerializer.new(@employee, include: [:profile, :work_histories])
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
      session[:user_id] = @employee.id
      render json: EmployeeSerializer.new(@employee, include: [:profile, :work_histories])
      # format.html { redirect_to @employee, notice: "Employee was successfully created." }
        # format.json { render :show, status: :created, location: @employee }
    else
        render json: @employee.errors
        # format.html { render :new, status: :unprocessable_entity }
        # format.json { render json: @employee.errors, status: :unprocessable_entity }
    end
    # end
  end

  # PATCH/PUT /employees/1 or /employees/1.json
  def update
    respond_to do |format|
      if @employee.update(employee_params)
        format.html { redirect_to @employee, notice: "Employee was successfully updated." }
        format.json { render :show, status: :ok, location: @employee }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @employee.errors, status: :unprocessable_entity }
      end
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
