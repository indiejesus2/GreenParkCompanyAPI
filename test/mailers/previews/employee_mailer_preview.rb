# Preview all emails at http://localhost:3000/rails/mailers/employee_mailer
class EmployeeMailerPreview < ActionMailer::Preview
    def welcome_email
        EmployeeMailer.with(employee: Employee.first).welcome_email
    end

    def jobs_email
        EmployeeMailer.with(employee: Employee.first).jobs_email
    end

end
