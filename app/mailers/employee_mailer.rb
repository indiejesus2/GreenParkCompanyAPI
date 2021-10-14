class EmployeeMailer < ApplicationMailer
    default from: 'notifications@example.com'

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
        @jobs = @employee.jobs
        mail(
            to: email_address_with_name(@employee.email, @employee.profile.name),
            subject: "BluCollar - Job Matches"
        )
    end

end
