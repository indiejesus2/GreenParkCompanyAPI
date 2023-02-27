class EmployeeMailer < ApplicationMailer
    default from: 'postmaster@mg.blucollar.com'

    def welcome_email
        @employee = params[:employee]
        @url = 'http://www.blucollar.com'
        attachments.inline["logo.png"] = File.read("#{Rails.root}/public/images/blucollar-logo-non-bold.png")
        mail(
            to: email_address_with_name(@employee.email, @employee.profile.name),
            subject: "Welcome to BluCollar!"
        )
    end

    def jobs_email
        @employee = params[:employee]
        @jobs = @employee.jobs.sort_by {|job| job.created_at}.take(5)
        attachments.inline["logo.png"] = File.read("#{Rails.root}/public/images/blucollar-logo-non-bold.png")
        mail(
            to: email_address_with_name(@employee.email, @employee.profile.name),
            subject: "BluCollar - Job Matches"
        )
    end

    def applied_email
        @url = 'http://www.blucollar.com'
        attachments.inline["logo.png"] = File.read("#{Rails.root}/public/images/blucollar-logo-non-bold.png")
        @employee = params[:employee]
        @applicant = params[:applicant]
        @jobs = @employee.jobs
        @job = Job.find{|job| job.id == @applicant.job_id}
        @jobs = @jobs.reject{|job| job.id == @job.id}.take(3)
        # @job_url = `http://www.blucollar.com/#{@employee.id}/jobs/#{@job.id}`
        mail(
            to: email_address_with_name(@employee.email, @employee.profile.name),
            subject: "BluCollar - Applied Job"
        )
    end

    def match_email
        @url = 'http://www.blucollar.com'
        @applicant = params[:applicant]
        @employee = Employee.find(@applicant.employee_id)
        @job = Job.find(@applicant.job_id)
        attachments.inline["logo.png"] = File.read("#{Rails.root}/public/images/blucollar-logo-non-bold.png")
        # @application = @employee.applicants.find{|applicant| applicant.id == params[:application]}
        # @jobs = @employee.jobs
        # @applicant = @jobs.find_index{|job| job.id == @application.job_id}
        # @job = Job.find{|job| job.id == @application.job_id}
        # @jobs = @jobs.reject{|job| job.id == @job.id}
        # @job_url = "http://www.blucollar.com/" + @employee.id + "/jobs/" + @job.id + "/matches"
        # @job_url = `http://www.blucollar.com/#{@employee.id}/jobs/#{@job.id}/matches`
        mail(
            to: email_address_with_name(@employee.email, @employee.profile.name),
            subject: "BluCollar - Job Match"
        )
    end
    
  def password_reset
    @user = params[:employee]
    @temp = params[:temp]
    @employee = @user.profile    
    @url = 'http://www.blucollar.com'
    @reset_url = 'http://www.blucollarcom/home/reset_password'
    attachments.inline["logo.png"] = File.read("#{Rails.root}/public/images/blucollar-logo-non-bold.png")
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
