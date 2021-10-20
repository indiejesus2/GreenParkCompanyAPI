# Preview all emails at http://localhost:3000/rails/mailers/employer_mailer
class EmployerMailerPreview < ActionMailer::Preview
    def welcome_email
        EmployerMailer.with(employer: Employer.first).welcome_email
    end

    def candidates_email
        EmployerMailer.with(employer: Employer.first).candidates_email
    end
end
