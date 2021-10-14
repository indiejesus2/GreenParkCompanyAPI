class EmployeeMailer < ApplicationMailer
    default from: 'notifications@example.com'

    def welcome_email(employee)
        @employee = employee
        @url = 'https://blucollar-jobs.herokuapp.com'
        mail(to: @employee.email, subject: "Welcome to BluCollar!")
    end

end
