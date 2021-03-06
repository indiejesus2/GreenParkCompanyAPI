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
        if !logged_in? && !current_user
        #     @user = session[:contractor_id] ? "contractor" : "employee"
        #     if @user == "contractor" 
        #         redirect_to api_v1_employer_jobs_path(employer_id: current_user.id)
        #         # redirect_to api_v1_employer_jobs_path(employer_id: session[:contractor_id])
        #     elsif @user == "employee"
        #         redirect_to api_v1_employee_jobs_path(employee_id: current_user.id)
        #     end
        # else
            logout!
            render json: {
                status: 200,
                logged_out: true
            }
        # else
        #     render json: {
        #         status: 200
        #         # logged_in: logged_in?
        #     }
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
        if password_params[:user] == "employee"
            @user = Employee.find_by(email: params[:email])
            if !!@user
                @temp = SecureRandom.random_number(1000000)
                @user.update(password_reset_token: @temp, password_reset_sent: Time.now)
                @user.save
                EmployeeMailer.with(employee: @user, temp: @temp).password_reset.deliver_later
                render json: @employee
            else
                render json: {
                    error: "No profile found.", status: 401
                }
            end                
        elsif password_params[:user] == "contractor"
            @user = Employer.find_by(email: params[:email])
            if !!@user
                @temp = SecureRandom.random_number(1000000)
                @user.update(password_reset_token: @temp, password_reset_sent: Time.now)
                @user.save
                EmployerMailer.with(employer: @user, temp: @temp).password_reset.deliver_later
            else
                render json: {
                    error: "No profile found.", status: 401
                }
            end    
        else
            render json: {
                error: "No profile found.", status: 401
            }    
        end
    end

    def reset_password
        if reset_params[:user] == "employee"
            @user = Employee.find_by(email: reset_params[:email])
        else
            @user = Employer.find_by(email: reset_params[:email])
        end
        byebug
        if @user.password_reset_token == reset_params[:token]
            @user.update(password: params[:password])
            @user.save
            # EmployeeMailer.with(employee: user).password_update.deliver_later 
        else
            render json: {
                error: "Incorrect token/invalid email.", status: 401
            }
        end
    end

    def contact
        @name = contact_params[:name]
        @email = contact_params[:email]
        @msg = contact_params[:msg]
        EmployeeMailer.with(name: @name, email: @email, msg: @msg).contact_email.deliver_later
        render json: {
            status: 200
        }
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

    def reset_params
        params.require(:auth).permit(:email, :password, :token, :user)
    end

    def contact_params
        params.require(:auth).permit(:name, :email, :msg)
    end

end