class Api::V1::AuthController < ApplicationController
    # skip_before_action :authorized, only: [:create]

    wrap_parameters :employee, include: [:email, :password]

    def create
        @employee = Employee.find_by(email: employee_params[:email])
        if @employee && @employee.authenticate(employee_params[:password])
            # format.html { redirect_to @employee, notice: "Employee was successfully created." }
            render json: @employee
            # token = issue_token(@user)
            # cookies.signed[:jwt] = {value: token, httponly: true, expires: 1.hour.from_now}
            # render json: {user: UserSerializer.new(@user), jwt: token}
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

end