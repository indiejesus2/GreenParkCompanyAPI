class EmployeeMailer < ApplicationMailer
    default from: 'postmaster@mg.blucollar.com'

    def welcome_email
        @employee = params[:employee]
        @url = 'http://www.blucollar.com'
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
        @url = 'http://www.blucollar.com'
        @job_url = 'http://www.blucollar.com'
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
    @url = 'http://www.blucollar.com'
    @reset_url = 'http://www.blucollarcom/home/reset_password'
    mail(
        to: @user.email, subject: "Password Reset"
    ) 
  end

  def contact_email
    @contact = params
    mail(
        to: "paul@blucollar.com", 
        subject: "Contact Message",
    )
  end
  
end
