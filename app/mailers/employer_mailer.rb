class EmployerMailer < ApplicationMailer
    default from: 'postmaster@mg.blucollar.com'

    def welcome_email
        @employer = params[:employer]
        @url = 'http://www.blucollar.com'
        mail(
            to: email_address_with_name(@employer.email, @employer.name),
            subject: "Welcome to BluCollar!"
        )
    end

    def candidates_email
        @employer = params[:employer]
        applicants = @employer.applicants
        @candidates = applicants.map{|applicant| applicant.profile}
        @candidates = @candidates.take(5)
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

end
