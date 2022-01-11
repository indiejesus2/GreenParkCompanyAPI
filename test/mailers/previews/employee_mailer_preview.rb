# Preview all emails at http://localhost:3000/rails/mailers/employee_mailer
class EmployeeMailerPreview < ActionMailer::Preview
    def welcome_email
        EmployeeMailer.with(employee: Employee.first).welcome_email
    end

    def jobs_email
        EmployeeMailer.with(employee: Employee.first).jobs_email
    end

    def applied_email
        EmployeeMailer.with(employee: Employee.first, application: Employee.first.applicants.find_by(interested: true)).applied_email
    end

end
