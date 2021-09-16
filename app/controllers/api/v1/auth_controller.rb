class Api::V1::AuthController < ApplicationController
    # skip_before_action :authorized, only: [:create]

    # wrap_parameters :employee, include: [:email, :password]
    # wrap_parameters :employer, include: [:email, :password]

    def create
        if params["employee"]
            @employee = Employee.find_by(email: employee_params[:email])
        else
            @contractor = Employer.find_by(email: employer_params[:email])
        end
        if @employee && @employee.authenticate(employee_params[:password])
            # session[:user_id] = @employee.id
            # format.html { redirect_to @employee, notice: "Employee was successfully creaated." }
            render json: EmployeeSerializer.new(@employee, include: [:profile, :work_histories])
            # token = issue_token(@user)
            # cookies.signed[:jwt] = {value: token, httponly: true, expires: 1.hour.from_now}
            # render json: {user: UserSerializer.new(@user), jwt: token}
        elsif @contractor && @contractor.authenticate(employer_params[:password])
            session[:user_id] = @contractor.id
            render json: {contractor: @contractor, jobs: @contractor.jobs}
            # , profile: @contractor.profile}
        else
            render json: {error: "Incorrect Username/Password"}, status: 401
        end
    end

    # def show
    #     @user = User.find_by(id: user_id)
    #     if logged_in?
    #         render json: @user
    #     else
    #         render json: {error: 'No user could be found'}, status: 401
    #     end
    # end

    # def destroy
    #     byebug
    # end

    private

    def employee_params
        params.require(:employee).permit(:email, :password)
      end

    def employer_params
        params.require(:employer).permit(:employer, :email, :password)
    end

end