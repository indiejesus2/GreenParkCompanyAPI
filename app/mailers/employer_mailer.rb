class EmployerMailer < ApplicationMailer
    default from: 'postmaster@mg.blucollar.com'

    def welcome_email
        @employer = params[:employer]
        @url = 'http://www.blucollar.com'
        attachments.inline["logo.png"] = File.read("#{Rails.root}/public/images/blucollar-logo-non-bold.png")
        mail(
            to: email_address_with_name(@employer.email, @employer.name),
            subject: "Welcome to BluCollar!"
        )
    end

    def candidates_email
        @employer = params[:employer]
        attachments.inline["logo.png"] = File.read("#{Rails.root}/public/images/blucollar-logo-non-bold.png")
        # byebug
        # @candidates = params[:applications].map{|applicant| applicant.profile}
        # byebug
        applicants = @employer.applicants.filter {
            |applicant| applicant.created_at >= Date.current - 1
        }
        @candidates = applicants.map{|applicant| applicant.profile}
        @candidates = @candidates.take(5)
        @url = 'http://www.blucollar.com'
        mail(
            to: email_address_with_name(@employer.email, @employer.name),
            subject: "BluCollar - Latest Candidates"
        )
    end

    def password_reset_email
        attachments.inline["logo.png"] = File.read("#{Rails.root}/public/images/blucollar-logo-non-bold.png")
        @user = params[:employer]
        @temp = params[:temp]
        @url = 'http://www.blucollar.com'
        @reset_url = 'http://www.blucollarcom/home/reset_password'
        mail(
            to: user.email, subject: "Password Reset"
        ) 
    end

    def cancel_subscription_email
        @employer = params[:employer]
        if @employer.yearly == true 
            @subscription = "yearly"
        else
            @subscription = "monthly"
        end
        @url = 'http://www.blucollar.com'
        attachments.inline["logo.png"] = File.read("#{Rails.root}/public/images/blucollar-logo-non-bold.png")
        mail(
            to: email_address_with_name(@employer.email, @employer.name),
            subject: "BluCollar - Cancel Subscription"
        )
    end
    
    def next_billing_email
        attachments.inline["logo.png"] = File.read("#{Rails.root}/public/images/blucollar-logo-non-bold.png")
        @employer = params[:employer]
        @url = 'http://www.blucollar.com'
        mail(
            to: email_address_with_name(@employer.email, @employer.name),
            subject: "BluCollar - Upcoming Billing"
        )
    end
    
    def updated_subscription_email
        attachments.inline["logo.png"] = File.read("#{Rails.root}/public/images/blucollar-logo-non-bold.png")
        @employer = params[:employer]
        @url = 'http://www.blucollar.com'
        mail(
            to: email_address_with_name(@employer.email, @employer.name),
            subject: "BluCollar - Recent Updates to Subscription"
        )
    end

    def applied_email
        @url = 'http://www.blucollar.com'
        attachments.inline["logo.png"] = File.read("#{Rails.root}/public/images/blucollar-logo-non-bold.png")
        @employer = params[:employer]
        @applicant = params[:applicant]
        @jobs = @employer.jobs
        @candidate = Profile.find{|profile| profile.employee_id == @applicant.employee_id}
        @job = Job.find{|job| job.id == @applicant.job_id}
        @applicants = @job.applicants
        # @job_url = `http://www.blucollar.com/employers/#{@job.employer_id}/jobs/#{@job.id}`
        @applicants = @applicants.reject{|applicant| applicant.id == @applicant.id}.take(3)
        mail(
            to: email_address_with_name(@employer.email, @employer.name),
            subject: "BluCollar - Candidate Application"
        )
    end

    def match_email
        @url = 'http://www.blucollar.com'
        @applicant = params[:applicant]
        @employee = Employee.find(@applicant.employee_id)
        @candidate = @employee.profile
        @employer = Employer.find(@applicant.employer_id)
        @job = Job.find(@applicant.job_id)
        attachments.inline["logo.png"] = File.read("#{Rails.root}/public/images/blucollar-logo-non-bold.png")
        # byebug
        # @application = @employee.applicants.find{|applicant| applicant.id == params[:application]}
        # @jobs = @employee.jobs
        # @applicant = @jobs.find_index{|job| job.id == @application.job_id}
        # @job = Job.find{|job| job.id == @application.job_id}
        # @jobs = @jobs.reject{|job| job.id == @job.id}
        # @job_url = `http://www.blucollar.com/#{@employer.id}/jobs/#{@job.id}/matches`
        mail(
            to: email_address_with_name(@employer.email, @employer.name),
            subject: "BluCollar - Candidate Match"
        )
    end

end
