class EmployerMailer < ApplicationMailer
    default from: 'notifications@example.com'

    def welcome_email
        @employer = params[:employer]
        @url = 'https://blucollar-jobs.herokuapp.com'
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

    def password_reset(user)
        @user = user
        @url = 'https://blucollar-jobs.herokuapp.com'
        @reset_url = 'https://blucollar-jobs.herokuapp.com/contractors/reset_password'
        mail(
            to: user.email, subject: "Password Reset"
        ) 
    end

end
