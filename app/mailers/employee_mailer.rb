class EmployeeMailer < ApplicationMailer
    default from: 'postmaster@mg.blucollar.com'

    def welcome_email
        @employee = params[:employee]
        @url = 'https://blucollar-jobs.herokuapp.com'
        mail(
            to: email_address_with_name(@employee.email, @employee.profile.name),
            subject: "Welcome to BluCollar!"
        )
    end

    def jobs_email
        @employee = params[:employee]
        @jobs = @employee.jobs.sort_by {|job| job.id}.take(5)
        mail(
            to: email_address_with_name(@employee.email, @employee.profile.name),
            subject: "BluCollar - Job Matches"
        )
    end

    def applied_email
        @url = 'https://blucollar-jobs.herokuapp.com'
        @job_url = 'https://blucollar-jobs.herokuapp.com'
        @employee = params[:employee]
        @application = @employee.applicants.find{|applicant| applicant.id == params[:application]}
        @jobs = @employee.jobs
        @applicant = @jobs.find_index{|job| job.id == @application.job_id}
        @job = Job.find{|job| job.id == @application.job_id}
        @jobs = @jobs.reject{|job| job.id == @job.id}
        mail(
            to: email_address_with_name(@employee.email, @employee.profile.name),
            subject: "BluCollar - Applied Job"
        )
    end

    
  def password_reset
    @user = params[:employee]
    @temp = params[:temp]
    @employee = @user.profile    
    @url = 'https://blucollar-jobs.herokuapp.com'
    @reset_url = 'https://blucollar-jobs.herokuapp.com/employees/reset_password'
    mail(
        to: @user.email, subject: "Password Reset"
    ) 
  end

end
