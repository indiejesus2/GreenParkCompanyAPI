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
            session[:employee_id] = @employee.id
            # format.html { redirect_to @employee, notice: "Employee was successfully creaated." }
            redirect_to api_v1_employee_jobs_path(@employee)
            # token = issue_token(@user)
            # cookies.signed[:jwt] = {value: token, httponly: true, expires: 1.hour.from_now}
            # render json: {user: UserSerializer.new(@user), jwt: token}
        elsif @contractor && @contractor.authenticate(employer_params[:password])
            session[:contractor_id] = @contractor.id
            redirect_to api_v1_employer_jobs_path(@contractor)
        else
            render json: {error: "Incorrect Username/Password"}, status: 401
        end
    end

    def is_logged_in?
        if logged_in? && current_user
            @user = session[:contractor_id] ? "contractor" : "employee"
            if @user == "contractor" 
                redirect_to api_v1_employer_path(id: session[:contractor_id])
                # redirect_to api_v1_employer_jobs_path(employer_id: session[:contractor_id])
            elsif @user == "employee"
                redirect_to api_v1_employee_path(id: session[:employee_id])
            end
        else
            logout!
            render json: {
                status: 200,
                logged_out: true
            }
        end
    end

    def find_city
        location = Geocoder.search(params[:zipcode]).find{|location| location.country_code == "us"}
        render json: {
            town: location.display_name.split(",")[0],
            state: location.state
        }
    end

    def forgot_password
        if password_params[:user] == "employees"
            @user = Employee.find_by(email: params[:email])
            @temp = SecureRandom.random_number(100000)
            EmployeeMailer.with(employee: @user, temp: @temp).forgot_email.deliver_later
        elsif password_params[:user] == "contractor"
            @user = Employer.find_by(email: params[:email])
            EmployerMailer.with(employee: @user, temp: @temp).forgot_email.deliver_later
        else
            render json: {
                error: "No profile found."
            }    
        end
    end

    def reset_password
        if reset_params[:user] == "employees"
            
    end

        #     render json: {
        #         user: @user,
        #         current: current_user
        #     }
        # else
        #     render json: {
        #         logged_in: false,
        #         error: "No User Logged-In"
        #     }
    # end

    def destroy
        logout!
        render json: {
            status: 200,
            logged_out: true
        }
    end

    private

    def employee_params
        params.require(:employee).permit(:email, :password)
      end

    def employer_params
        params.require(:employer).permit(:employer, :email, :password)
    end

    def password_params
        params.require(:auth).permit(:email, :user)
    end

end