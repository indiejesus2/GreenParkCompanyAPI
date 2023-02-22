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
            subject: "BluCollar - Candidate Matches"
        )
    end

    def password_reset
        @user = params[:employer]
        @temp = params[:temp]
        @url = 'http://www.blucollar.com'
        @reset_url = 'http://www.blucollarcom/home/reset_password'
        mail(
            to: user.email, subject: "Password Reset"
        ) 
    end

    def cancel_subscription
        @employer = params[:employer]
        @url = 'http://www.blucollar.com'
        mail(
            to: email_address_with_name(@employer.email, @employer.name),
            subject: "BluCollar - Candidate Matches"
        )
    end
    
    def next_billing
        @employer = params[:employer]
        @url = 'http://www.blucollar.com'
        mail(
            to: email_address_with_name(@employer.email, @employer.name),
            subject: "BluCollar - Candidate Matches"
        )
    end
    
    def updated_subscription
        @employer = params[:employer]
        @url = 'http://www.blucollar.com'
        mail(
            to: email_address_with_name(@employer.email, @employer.name),
            subject: "BluCollar - Candidate Matches"
        )
    end

    def applied_email
        @url = 'http://www.blucollar.com'
        @employer = params[:employer]
        @application = @employer.applicants.find{|applicant| applicant.id == params[:application]}
        @jobs = @employer.jobs
        @applicant = @jobs.find_index{|job| job.id == @application.job_id}
        @candidate = @employees.profiles.find{|profile| profile.employee_id == @application.employee_id}
        @job = Job.find{|job| job.id == @application.job_id}
        @job_url = `http://www.blucollar.com/employers/#{@job.employer_id}/jobs/#{@job.id}`
        @jobs = @jobs.reject{|job| job.id == @job.id}
        mail(
            to: email_address_with_name(@employer.email, @employer.name),
            subject: "BluCollar - Candidate Application"
        )
    end

    def match_email
        @url = 'http://www.blucollar.com'
        @employer = params[:employer]
        @job = params[:job]
        # @application = @employee.applicants.find{|applicant| applicant.id == params[:application]}
        # @jobs = @employee.jobs
        # @applicant = @jobs.find_index{|job| job.id == @application.job_id}
        # @job = Job.find{|job| job.id == @application.job_id}
        # @jobs = @jobs.reject{|job| job.id == @job.id}
        @job_url = `http://www.blucollar.com/#{@employer.id}/jobs/#{@job.id}`
        mail(
            to: email_address_with_name(@employee.email, @employee.profile.name),
            subject: "BluCollar - Candidate Match"
        )
    end

end
